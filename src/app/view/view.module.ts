import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { HomeModule } from '../home/home.module';
import { ViewHomeComponent } from './home/home.component';
import { AuthentificationModule } from '../authentification/authentification.module';

@NgModule({
  declarations: [ViewHomeComponent],
  imports: [SharedModule, RouterModule, HomeModule, LayoutModule, AuthentificationModule],
  exports: [],
})
export class ViewModule {}
