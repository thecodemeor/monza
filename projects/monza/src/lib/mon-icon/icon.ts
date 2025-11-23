// ============================================================================
// Monza Icon Styles
// ============================================================================
// Defines size, color, and alignment styles for the Icon component in the
// Monza Design System. Icons enhance visual communication and support
// clarity in buttons, labels, and status indicators.
//
// Customizable Props:
// - name, size, color
//
// -----------------------------------------------------------------------------
// Author: thecodemeor
// Version: 1.0
// -----------------------------------------------------------------------------

import {
    Component,
    Input,
    AfterContentInit,
    ViewChild,
    ElementRef,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    inject
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MONZA_OUTLINE_ICONS, MONZA_DUOTONE_ICONS } from './monza-icons';

@Component({
    selector: 'mon-icon',
    templateUrl: './icon.html',
    styleUrls: ['./icon.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonIcon implements AfterContentInit {
    @Input() model: 'outline' | 'duotone' = 'outline';
    @Input() color: 'default' | 'primary' | 'success' | 'warn' | 'danger' | string = 'default';
    @Input() size: string | number = 24;

    @ViewChild('slot', { static: true }) slot!: ElementRef<HTMLElement>;

    iconName = '';
    safeSvg?: SafeHtml;


    private sanitizer = inject(DomSanitizer);
    private cdr = inject(ChangeDetectorRef);

    ngAfterContentInit(): void {
        this.iconName = (this.slot.nativeElement.textContent ?? '').trim();

        let svg = '';
        if (this.model === 'duotone') {
            svg = MONZA_DUOTONE_ICONS[this.iconName] || '';
        } else {
            svg = MONZA_OUTLINE_ICONS[this.iconName] || '';
        }
        this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(svg);

        this.cdr.markForCheck();
    }

    get colorVar(): string {
        if (typeof this.color === 'string' && /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(this.color)) {
            return this.color;
        }

        switch (this.color) {
            case 'primary': return 'var(--mon-color-primary)';
            case 'success': return 'var(--mon-color-success)';
            case 'warn':    return 'var(--mon-color-warning)';
            case 'danger':  return 'var(--mon-color-danger)';
            default:
                return 'var(--mon-color-text)'; // "default"
        }
    }

    get iconSize(): string { return `${this.size}px`;}
}