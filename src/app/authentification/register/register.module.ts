import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './view/register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [SharedModule],
  exports: [RegisterComponent],
})
export class RegisterModule {}
