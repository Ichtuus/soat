import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-admin-menu-item',
  template: ` <li *ngFor="let link of links" class="active"><em [ngClass]="link.icon"></em> {{ link.name }}</li> `,
  styleUrls: ['./menu.component.scss'],
})
export class AdminMenuItemComponent {
  @Input() links: any;
}
