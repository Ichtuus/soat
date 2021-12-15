import { NgModule } from '@angular/core';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [],
  imports: [AuthentificationRoutingModule],
  exports: [RegisterModule, LoginModule],
})
export class AuthentificationModule {}
