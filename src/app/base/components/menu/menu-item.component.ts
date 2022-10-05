import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-menu-item',
  template: `

  <a *ngFor="let link of links" class="link" [class]="link.name" [href]="link.path">{{ link.name }}</a>

  `,
  styleUrls: ['./menu.component.scss'],
})
export class MenuItemComponent {
  @Input() links: any;
}
