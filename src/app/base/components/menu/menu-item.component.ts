import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-menu-item',
  template: `
    <span class="font-medium mr-2 ml-2" *ngFor="let link of links"
      ><a [href]="link.path">{{ link.name }}</a></span
    >
  `,
  styleUrls: ['./menu.component.scss'],
})
export class MenuItemComponent {
  @Input() links: any;
}
