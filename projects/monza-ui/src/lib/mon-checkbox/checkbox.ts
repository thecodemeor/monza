// ============================================================================
// Monza Checkbox Styles
// ============================================================================
// Defines base and variant styles for the Checkbox component in the
// Monza Design System. Checkboxes let users select one or multiple
// options, supporting checked, unchecked, and indeterminate states.
//
// Customizable Props:
// - checked, indeterminate, disabled, color, position
//
// -----------------------------------------------------------------------------
// Author: thecodemeor
// Version: 1.0
// -----------------------------------------------------------------------------


import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    booleanAttribute,
    ChangeDetectorRef,
    inject
} from '@angular/core';

@Component({
    selector: 'mon-checkbox',
    templateUrl: './checkbox.html',
    styleUrls: ['./checkbox.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonCheckbox {
    @Input() value: any;

    private _checked = false;
    private _indeterminate = false;
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
    get indeterminate(): boolean {
        return this._indeterminate;
    }
    set indeterminate(value: boolean) {
        const next = !!value;
        if (this._indeterminate === next) return;
        this._indeterminate = next;
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

    @Input() color: 'default' | 'primary' | 'success' | 'warn' | 'danger' = 'default';
    @Input() position: 'start' | 'end' = 'start';

    @Output() change = new EventEmitter<boolean>();
    @Output() checkedChange = new EventEmitter<boolean>();

    focused = false;

    private _cdr = inject(ChangeDetectorRef)

    get checkboxColor(): string {
        switch (this.color) {
            case 'primary': return 'var(--mon-color-primary)';
            case 'success': return 'var(--mon-color-success)';
            case 'warn':    return 'var(--mon-color-warning)';
            case 'danger':  return 'var(--mon-color-danger)';
            default:        return 'var(--mon-color-text)';
        }
    }

    _onNativeChange(event: Event) {
        if (this.disabled) return;

        const input = event.target as HTMLInputElement;
        this.indeterminate = input.indeterminate;
        this.checked = input.checked;

        this.checkedChange.emit(this.checked);
        this.change.emit(this.checked);
    }
}