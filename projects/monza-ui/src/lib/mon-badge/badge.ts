// ============================================================================
// Monza Badge Styles
// ============================================================================
// Defines base and variant styles for the Badge component in the
// Monza Design System. Badges are compact indicators used to show
// status, counts, or contextual information alongside UI elements.
//
// Customizable Props:
// - color, icon, dot, notification, pulse
//
// -----------------------------------------------------------------------------
// Author: thecodemeor
// Version: 1.0
// -----------------------------------------------------------------------------

import {
    Component,
    Input,
    ElementRef,
    AfterContentInit,
    ChangeDetectionStrategy,
    booleanAttribute,
    inject,
    HostBinding
} from '@angular/core';

@Component({
  selector: 'mon-badge',
  templateUrl: './badge.html',
  styleUrls: ['./badge.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonBadge implements AfterContentInit {
    @Input() color: 'default' | 'primary' | 'success' | 'warn' | 'danger' = 'default';
    @Input() icon: 'check' | 'cancel' | 'alert' | 'pending' | null = null;
    @Input({ transform: booleanAttribute }) dot = false;
    @Input({ transform: booleanAttribute }) pulse = false;
    @Input({ transform: booleanAttribute }) notification = false;

    private host = inject(ElementRef<HTMLElement>);
    
    contentLength = 0;
    ngAfterContentInit(): void {
        const raw = (this.host.nativeElement.textContent ?? '').trim();
        this.contentLength = raw.length;
    }

    get classes(): string {
        return [
            'mon-badge',
            this.dot ? 'mon-badge--dot' : '',
            this.pulse && !this.dot ? 'mon-badge--pulsar' : '',
        ].filter(Boolean).join(' ');
    }

    get bg(): string {
        switch (this.color) {
            case 'primary': return 'var(--mon-color-primary)';
            case 'success': return 'var(--mon-color-success)';
            case 'warn':    return 'var(--mon-color-warning)';
            case 'danger':  return 'var(--mon-color-danger)';
            default:        return '';
        }
    }
    @HostBinding('style') get hostStyle() {
        const position = this.notification ? 'absolute' : 'unset';
        const top = this.notification ? '-0.56rem' : 'unset';
        const right = this.notification ? '1rem' : 'unset';
        return {
            position, top, right,
        };
    }

    get styleVars() {
        if(this.dot) { return {};}

        let width
        let padding
        if((this.contentLength === 1 && !this.icon) || (this.contentLength === 0 && this.icon)) {
            width = '1.2rem';
            padding = '0.125rem';
        } else if(this.icon) {
            width = 'fit-content'
            padding = '0 0.625rem 0 0.125rem';
        } else {
            width = 'fit-content'
            padding = '0 0.625rem';
        }

        return {
            width, padding,
        };
    }
}