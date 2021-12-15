import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMenuItemComponent } from './menu/menu-item.component';
import { AdminMenuComponent } from './menu/menu.component';
import { AdminComponent } from './components/view/admin.component';

@NgModule({
  declarations: [AdminMenuComponent, AdminMenuItemComponent, AdminComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AdminMenuComponent, AdminMenuItemComponent, AdminComponent],
})
export class AdminModule {}
