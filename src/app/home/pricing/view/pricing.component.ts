import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'view-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class ViewPricingComponent {
  selected = new FormControl();
  serviceList = [
    {
      name: 'TRANSLATION',
      price: '25€',
      desc: 'description',
    },
    {
      name: 'SUBTITLING',
      price: '25€',
      desc: 'description',
    },
    {
      name: 'REVIEW',
      price: '25€',
      desc: 'description',
    },
    {
      name: 'POST-EDITING',
      price: '25€',
      desc: 'description',
    },
    {
      name: 'FRENCH EDITING',
      price: '25€',
      desc: 'description',
    },
    {
      name: 'TRANSCRIPTION',
      price: '25€ per hour',
      desc: 'description',
    },
  ];
}
