// ============================================================================
// Monza Progress Styles
// ============================================================================
// Defines base, variant, and animated styles for the Progress component in the
// Monza Design System. Progress visually represents completion, loading, or
// performance states through linear and circular indicators with smooth
// transitions and customizable colors.
//
// Customizable Props:
// - type (linear | circular), color, size, value, max, label, striped,
//   animated, track-color, show-percentage, indeterminate
//
// -----------------------------------------------------------------------------
// Author: thecodemeor
// Version: 1.0
// -----------------------------------------------------------------------------

import { Component, Input, HostBinding } from '@angular/core';

type MonProgressModel = 'ring' |
                        'line_spinner' |
                        'hourglass' |
                        'zoomies' |
                        'line_wobble' |
                        'infinity' |
                        'cardio' |
                        'helix' |
                        'newton'

@Component({
  selector: 'mon-progress',
  imports: [],
  templateUrl: './progress.html',
  styleUrl: './progress.scss'
})
export class MonProgress {
    @Input() model: MonProgressModel = 'ring';
    @Input() color: 'primary' | 'background' | 'default' = 'default';
    @Input() size = '40px';
    @Input() speed = '2s';

    @HostBinding('style.--mon-progress-color') get hostColor() { return this.color !== 'default' ? 'var(--mon-color-primary)': 'var(--mon-color-text)' }
    @HostBinding('style.--mon-progress-size') get hostSize() { return this.size }
    @HostBinding('style.--mon-progress-speed') get hostSpeed() { return this.speed }
}