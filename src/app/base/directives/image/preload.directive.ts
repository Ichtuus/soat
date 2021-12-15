import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)': 'updateSrc()',
    '(load)': 'load()',
    '[src]': 'src',
  },
})
export class PreloadImageDirective {
  @Input() src: string | undefined;
  @Input() default: string | undefined;
  @HostBinding('class') className: string | undefined;

  updateSrc() {
    this.src = this.default;
  }
  load() {
    this.className = 'image-loaded';
  }
}
