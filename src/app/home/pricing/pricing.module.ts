import { NgModule } from '@angular/core';
import { ViewPricingComponent } from './view/pricing.component';
import { FeaturePricingComponent } from './feature/pricing.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ViewPricingComponent, FeaturePricingComponent],
  imports: [SharedModule],
  exports: [ViewPricingComponent, FeaturePricingComponent],
})
export class PricingModule {}
