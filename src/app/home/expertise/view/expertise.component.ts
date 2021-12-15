import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'view-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss'],
})
export class ViewExpertiseComponent implements OnInit {
  ngOnInit(): void {
    this.isActive = true;
  }
  isActive!: boolean;
}
