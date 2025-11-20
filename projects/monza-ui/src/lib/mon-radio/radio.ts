// ============================================================================
// Monza Radio Styles
// ============================================================================
// Defines base and variant styles for the Radio component in the
// Monza Design System. Radios allow users to select a single option
// from a predefined set of choices.
//
// Customizable Props:
// - color, labelPosition, name, disabled, checked, value
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
    booleanAttribute,
    HostBinding,
    ChangeDetectorRef,
    inject
} from '@angular/core';

@Component({
    selector: 'mon-radio',
    templateUrl: './radio.html',
    styleUrls: ['./radio.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonRadio {
    @Input() color: 'default' | 'primary' | 'success' | 'warn' | 'danger' = 'default';
    @Input() labelPosition: 'end' | 'start' = 'end';
    @Input() name?: string;
    @Input() value: any;

    private _checked = false;
    private _disabled = false;

    @Input({ transform: booleanAttribute })
    get checked(): boolean {
        return this._checked;
    }
    set checked(value: boolean) {
        const next = !!value;
        if (this._checked === next) return;
        this._checked = next;
        this._cdr.markForCheck();
    }

    @Input({ transform: booleanAttribute })
    get disabled(): boolean {
        return this._disabled;
    }
    set disabled(value: boolean) {
        const next = !!value;
        if (this._disabled === next) return;
        this._disabled = next;
        this._cdr.markForCheck();
    }

    @Output() change = new EventEmitter<any>();

    @HostBinding('class.mon-radio--disabled')
    get isDisabled() { return this.disabled; }

    @HostBinding('attr.role') role = 'radio';

    @HostBinding('attr.aria-checked')
    get ariaChecked() { return String(this.checked); }

    @HostBinding('attr.aria-disabled')
    get ariaDisabled() { return String(this.disabled); }

    @HostBinding('tabindex')
    get tabIndex() { return this.disabled ? -1 : 0; }

    private _cdr = inject(ChangeDetectorRef);

    onInputChange() {
        if (this.disabled) return;
        if (!this.checked) {
            this.checked = true;
            this.change.emit(this.value);
        }
    }

    onKeydown(e: KeyboardEvent) {
        if (this.disabled) return;
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            this.onInputChange();
        }
    }

    get hostClasses(): string {
        return [
            'mon-radio',
            this.labelPosition === 'start' ? 'mon-radio--start' : '',
            this.disabled ? 'mon-radio--disabled' : ''
        ].filter(Boolean).join(' ');
    }

    get colorVar(): string {
        switch (this.color) {
            case 'primary': return 'var(--mon-color-primary)';
            case 'success': return 'var(--mon-color-success)';
            case 'warn':    return 'var(--mon-color-warning)';
            case 'danger':  return 'var(--mon-color-danger)';
            default:        return 'var(--mon-color-text)';
        }
    }
}
