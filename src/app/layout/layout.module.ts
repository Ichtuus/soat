import { NgModule } from '@angular/core';
import { ViewTemplateComponent } from './view/template.component';
import { BaseModule } from '../base/base.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ViewTemplateComponent],
  imports: [BaseModule, RouterModule],
  exports: [ViewTemplateComponent],
})
export class LayoutModule {}
