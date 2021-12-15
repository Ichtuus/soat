import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'base-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  @Input() links: any;

  isVisible = false;

  ngOnInit(): void {}

  @HostListener('mouseover', ['$event'])
  mouseover(event: Event) {
    console.log('mouseover', event);
    this.isVisible = true;
  }
  @HostListener('mouseleave', ['$event'])
  mousleave(event: Event) {
    console.log('mouseleave', event);
    this.isVisible = false;
  }
}
