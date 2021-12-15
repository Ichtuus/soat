import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'base-admin-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class AdminMenuComponent {
  @Input() title!: string;

  links = [
    {
      name: 'Dashboard',
      icon: 'fa fa-tachometer',
    },
  ];
}
