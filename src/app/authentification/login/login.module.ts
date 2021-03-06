import { NgModule } from '@angular/core';
import { LoginComponent } from './view/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule],
  exports: [LoginComponent],
})
export class LoginModule {}
