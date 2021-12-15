import { NgModule } from '@angular/core';
import { PricingModule } from './pricing/pricing.module';
import { AboutModule } from './about/about.module';
import { ExpertiseModule } from './expertise/expertise.module';
import { WorkModule } from './work/work.module';

@NgModule({
  declarations: [],
  imports: [],
  exports: [PricingModule, AboutModule, ExpertiseModule, WorkModule],
})
export class HomeModule {}
