import { Component } from '@angular/core';

@Component({
  selector: 'view-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class ViewWorkComponent {
  constructor() {}
  pageOfItems!: Array<any>;

  works = [
    { name: 'first' },
    { name: 'twice' },
    { name: 'third' },
    { name: 'fourth' },
    { name: 'cinc' },
    { name: 'sixeee' },
    { name: 'seth' },
    { name: 'ocho' },
  ];
  selectedWork: any = this.works[0];


  onChangePage(pageOfItems: any) {
    // update current page of items
    this.selectedWork = pageOfItems[0];
    this.pageOfItems = pageOfItems;
  }
}
