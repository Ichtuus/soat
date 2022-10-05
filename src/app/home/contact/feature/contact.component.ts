import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'feature-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FeatureContactComponent),
      multi: true,
    },
  ],
})
export class FeatureContactComponent implements AfterViewInit, ControlValueAccessor {
  onChange: any = () => {};
  onTouched: any = () => {};
  selectedService!: any;
  @Input() serviceList!: { name: string; price: string; desc: string }[];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(val: any) {
    this.selectedService = val;
  }

  @Output() serviceChange: EventEmitter<any> = new EventEmitter<any>();

  ngAfterViewInit(): void {
    this.selectedService = this.serviceList[0];
    this.changeDetectorRef.detectChanges();
  }

  onPurchase(service: any) {
    this.onChange(service);
    this.serviceChange.emit(service);
  }
}
