import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NetService } from './technical/net.service';
import { APP_NET_PROVIDER } from './interfaces/net-provider';

@NgModule({
  declarations: [],
  providers: [{ provide: APP_NET_PROVIDER, useExisting: NetService }],
  imports: [CommonModule, !environment.production ? StoreDevtoolsModule.instrument() : []],
})
export class CoreModule {}
