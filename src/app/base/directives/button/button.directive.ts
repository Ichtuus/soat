import { Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BooleanInput, convertToBoolProperty } from 'src/app/core/helpers';

@Directive({
  selector: 'button[soatBtn]',
  host: {
    class: 'btn',
  },
})
export class ButtonDirective implements OnChanges {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() status: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';

  private _fullWidth = false;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.status) {
      this.elementRef.nativeElement.classList.remove(`btn-${changes.status.previousValue}`);
      this.elementRef.nativeElement.classList.add(`btn-${changes.status.currentValue}`);
    }
  }

  @HostBinding('class.btn-lg')
  get lg() {
    return this.size === 'lg';
  }
  @HostBinding('class.btn-md')
  get md() {
    return this.size === 'md';
  }
  @HostBinding('class.btn-sm')
  get sm() {
    return this.size === 'sm';
  }

  static ngAcceptInputType_fullWidth: BooleanInput;
  @HostBinding('class.fullwidth')
  @Input()
  get fullWidth(): boolean {
    return this._fullWidth;
  }
  set fullWidth(value: boolean) {
    this._fullWidth = convertToBoolProperty(value);
  }
}
