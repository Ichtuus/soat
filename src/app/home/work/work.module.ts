import { NgModule } from '@angular/core';
import { ViewWorkComponent } from './view/work.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ViewWorkComponent],
  imports: [SharedModule],
  exports: [ViewWorkComponent],
})
export class WorkModule {}
