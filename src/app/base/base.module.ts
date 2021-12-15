import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuItemComponent } from './components/menu/menu-item.component';
import { PreloadImageDirective } from './directives/image/preload.directive';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonDirective } from './directives/button/button.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    PreloadImageDirective,
    PaginationComponent,
    ButtonDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    PreloadImageDirective,
    PaginationComponent,
    ButtonDirective,
  ],
})
export class BaseModule {}
