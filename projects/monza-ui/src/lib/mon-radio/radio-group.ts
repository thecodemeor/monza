// ============================================================================
// Monza Radio Group Styles
// ============================================================================
// Defines layout and interaction styles for grouping multiple
// Radio components within the Monza Design System. The group ensures
// only one option can be selected at a time.
//
// Customizable Props:
// - orientation, disabled, name
//
// -----------------------------------------------------------------------------
// Author: thecodemeor
// Version: 1.0
// -----------------------------------------------------------------------------

import {
    Component,
    ChangeDetectionStrategy,
    Input,
    Output,
    EventEmitter,
    ContentChildren,
    QueryList,
    AfterContentInit,
    booleanAttribute,
    forwardRef,
    HostBinding,
    ChangeDetectorRef,
    inject
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MonRadio } from './radio';

@Component({
    selector: 'mon-radio-group',
    standalone: true,
    templateUrl: './radio-group.html',
    styleUrls: ['./radio-group.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MonRadioGroup),
        multi: true
    }]
})
export class MonRadioGroup implements AfterContentInit, ControlValueAccessor {
    @Input() orientation: 'horizontal' | 'vertical' = 'vertical';

    private _disabled = false;
    @Input({ transform: booleanAttribute })
    get disabled(): boolean {
        return this._disabled;
    }
    set disabled(value: boolean) {
        const next = !!value;
        if (this._disabled === next) return;
        this._disabled = next;
        this._syncDisabled();
        this._cdr.markForCheck();
    }

    @Input() name = `mon-radio-${Math.random().toString(36).slice(2)}`;

    @Output() valueChange = new EventEmitter<any>();

    @ContentChildren(MonRadio, { descendants: true })
    radios!: QueryList<MonRadio>;

    @HostBinding('attr.role') role = 'radiogroup';

    private _value: any = null;
    get value() { return this._value; }
    set value(v: any) {
        this._value = v;
        this._syncFromValue();
        this.onChange(this._value);
        this.valueChange.emit(this._value);
    }

    // CVA hooks
    onChange: (v: any) => void = () => {};
    onTouched: () => void = () => {};

    // Store each radio's original disabled state
    private _originalDisabled = new WeakMap<MonRadio, boolean>();
    private _cdr = inject(ChangeDetectorRef);

    writeValue(v: any): void {
        this._value = v;
        this._syncFromValue();
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled; // reuse Input setter
    }

    ngAfterContentInit(): void {
        this._wireChildren();
        this._syncFromValue();
        this._syncDisabled();

        this.radios.changes.subscribe(() => {
            this._wireChildren();
            this._syncFromValue();
            this._syncDisabled();
            this._cdr.markForCheck();
        });
    }

    // keyboard roving: left/up prev, right/down next
    onKeydown(e: KeyboardEvent) {
        if (this.disabled) return;
        const items = this.radios.toArray().filter(r => !r.disabled);
        if (!items.length) return;

        const currentIndex = items.findIndex(r => r.checked);
        let next = currentIndex;

        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            next = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            next = currentIndex >= items.length - 1 ? 0 : currentIndex + 1;
        } else {
            return;
        }

        const target = items[next];
        this.select(target);
    }

    private _wireChildren() {
        this.radios.forEach(r => {
            r.name = this.name;

            if (!this._originalDisabled.has(r)) {
                this._originalDisabled.set(r, r.disabled);
            }

            r.change.subscribe((val: any) => {
                if (this.disabled) return;
                this.value = val;
                this.onTouched();
            });
        });
    }

    private _syncFromValue() {
        if (!this.radios) return;
        this.radios.forEach(r => {
            r.checked = (r.value === this._value);
        });
    }

    private _syncDisabled() {
        if (!this.radios) return;

        this.radios.forEach(r => {
            if (!this._originalDisabled.has(r)) {
                this._originalDisabled.set(r, r.disabled);
            }

            if (this._disabled) {
                r.disabled = true;
            } else {
                const original = this._originalDisabled.get(r) ?? false;
                r.disabled = original;
            }
        });
    }

    private select(radio: MonRadio) {
        if (radio.disabled) return;
        this.value = radio.value;
    }
}