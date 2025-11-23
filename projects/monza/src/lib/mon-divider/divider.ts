// ============================================================================
// Monza Divider Styles
// ============================================================================
// Defines base and variant styles for the Divider component in the
// Monza Design System. Dividers visually separate content sections
// to improve layout structure and readability.
//
// Customizable Props:
// - color, orientation, align, dashed, pill, depth
//
// -----------------------------------------------------------------------------
// Author: thecodemeor
// Version: 1.0
// -----------------------------------------------------------------------------


import {
    Component,
    Input,
    ChangeDetectionStrategy,
    booleanAttribute
} from '@angular/core';

@Component({
    selector: 'mon-divider',
    templateUrl: './divider.html',
    styleUrls: ['./divider.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonDivider {
    @Input() align: 'start' | 'center' | 'end' = 'center';
    @Input() color: 'default' | 'primary' | 'success' | 'warn' | 'danger' = 'default';
    @Input() depth: string = '';
    @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
    @Input({ transform: booleanAttribute }) dashed = false;
    @Input({ transform: booleanAttribute }) pill = false;
    
    get hostClasses(): string[] {
        return [
        'mon-divider',
        `mon-divider--align-${this.align}`,
        `mon-divider--${this.orientation}`,
        this.dashed ? 'mon-divider--dashed' : '',
        this.pill ? 'mon-divider--pill' : ''
        ].filter(Boolean);
    }

    /** Compute inline style for color */
    get styleVars() {
        switch (this.color) {
            case 'primary': return 'var(--mon-color-primary)';
            case 'success': return 'var(--mon-color-success)';
            case 'warn':    return 'var(--mon-color-warning)';
            case 'danger':  return 'var(--mon-color-danger)';
            default: return ;
        }
    }
}
