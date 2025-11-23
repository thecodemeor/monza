// ============================================================================
// Monza Button Styles
// ============================================================================
// Defines base and variant styles for the Button component in the
// Monza Design System. Buttons are key interactive elements that
// trigger actions and guide user flow.
//
// Customizable Props:
// - color, model, full (width), disabled
//
// -----------------------------------------------------------------------------
// Author: thecodemeor
// Version: 1.0
// -----------------------------------------------------------------------------

import {
    Component,
    ChangeDetectionStrategy,
    Input,
    HostListener,
    ElementRef,
    Renderer2,
    inject,
    booleanAttribute
} from '@angular/core';

@Component({
  selector: 'mon-button-icon',
  templateUrl: './button-icon.html',
  styleUrls: ['./button-icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonButtonIcon {
    @Input() model: 'tonal' | 'glass' | 'text' = 'text';
    @Input() color: 'default' | 'primary' | 'success' | 'warn' | 'danger' = 'default';
    @Input({ transform: booleanAttribute }) gap = false;
    @Input({ transform: booleanAttribute }) disabled = false;

    private el = inject(ElementRef<HTMLElement>);
    private renderer = inject(Renderer2);

    get hostClasses(): string {
        return [
            'mon-btnIcon', `mon-btnIcon--${this.model}`,
        ].filter(Boolean).join(' ');
    }

    get btnColor(): string {
        switch (this.color) {
            case 'primary': return 'var(--mon-color-primary)';
            case 'success': return 'var(--mon-color-success)';
            case 'warn':    return 'var(--mon-color-warning)';
            case 'danger':  return 'var(--mon-color-danger)';
            default:        return 'var(--mon-color-text)';
        }
    }

    get btnPadding() {
        if (this.model === 'text') {
            return this.gap ? 'var(--mon-btnIcon-space)' : '0';
        }
        return '0';
    }
}
