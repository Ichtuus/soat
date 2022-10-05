import { NgModule } from '@angular/core';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';
import { ExpertiseModule } from './expertise/expertise.module';
import { WorkModule } from './work/work.module';

@NgModule({
  declarations: [],
  imports: [],
  exports: [ContactModule, AboutModule, ExpertiseModule, WorkModule],
})
export class HomeModule {}
