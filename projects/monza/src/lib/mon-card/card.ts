// ============================================================================
// Monza Card Styles
// ============================================================================
// Defines base and variant styles for the Card component in the
// Monza Design System. Cards serve as flexible containers for
// grouping related content, media, and actions.
//
// Customizable Props:
// - model, color, advance, loading
//
// -----------------------------------------------------------------------------
// Author: thecodemeor
// Version: 1.0
// -----------------------------------------------------------------------------


import {
    Component,
    ChangeDetectionStrategy,
    Input,
    booleanAttribute,
    HostBinding,
    Directive
} from '@angular/core';

@Component({
    selector: 'mon-card',
    templateUrl: './card.html',
    styleUrls: ['./card.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonCard {
    @Input() model: 'fill' | 'outline' | 'elevated' | 'flavor' | 'glass' = 'fill';
    @Input() color: 'default' | 'primary' | 'success' | 'warn' | 'danger' = 'default';
    @Input({ transform: booleanAttribute }) advance = false;
    @Input({ transform: booleanAttribute }) loading = false;

    @HostBinding('class') get hostClass() {
        const loading = this.loading ? 'mon-card-skeleton' : '';
        const advancing = this.advance ? 'mon-card-advancing' : '';

        return `mon-card-${this.model} ${loading} ${advancing}`.trim();
    }

    @HostBinding('style.--mon-card-bg') get hostColor() {
        switch (this.color) {
            case 'primary': return 'var(--mon-color-primary)';
            case 'success': return 'var(--mon-color-success)';
            case 'warn':    return 'var(--mon-color-warning)';
            case 'danger':  return 'var(--mon-color-danger)';
            default:
                if (this.model === 'fill') {
                    return 'var(--mon-color-primary)'
                } else {
                    return 'var(--mon-color-border)';
                }
        }
    }

    @HostBinding('style.--mon-card-bg-contrast') get hostBgContrast() {
        if(this.model === 'flavor') {
            if(this.color === 'default') {
                return '0%'
            } else {
                return '10%'
            }
        } else { return }
    }

    @HostBinding('style.padding') get hostAdvance() {
        return this.advance ? 'var(--mon-space-1)' : ''
    }

    get headerClasses(): string {
        return [
            this.model === 'fill' && this.advance ? 'mon-card-header--fill' : '',
            this.model === 'flavor' && this.advance ? 'mon-card-header--flavor' : '',
        ].filter(Boolean).join(' ');
    }

    get bodyClasses(): string {
        return [
            this.model === 'fill' && this.advance ? 'mon-card-body--fill' : '',
            this.model === 'flavor' && !this.advance ? 'mon-card-body--flavor' : '',
        ].filter(Boolean).join(' ');
    }

    get footerClasses(): string {
        return [
            this.model === 'fill' && this.advance ? 'mon-card-footer--fill' : '',
        ].filter(Boolean).join(' ');
    }
}

@Directive({ selector: 'mon-card-header', standalone: true })
export class MonCardHeader {}

@Directive({ selector: 'mon-card-body', standalone: true })
export class MonCardBody{}

@Directive({ selector: 'mon-card-footer', standalone: true })
export class MonCardFooter {}

@Directive({ selector: 'mon-card-media', standalone: true })
export class MonCardMedia {}

@Directive({ selector: 'mon-card-header-actions', standalone: true })
export class MonCardHeaderActions {}

@Directive({ selector: 'mon-card-footer-actions', standalone: true })
export class MonCardFooterActions {}