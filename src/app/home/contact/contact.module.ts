import { NgModule } from '@angular/core';
import { ViewContactComponent } from './view/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureContactComponent } from './feature/contact.component';

@NgModule({
  declarations: [ViewContactComponent, FeatureContactComponent],
  imports: [SharedModule],
  exports: [ViewContactComponent, FeatureContactComponent],
})
export class ContactModule {}
