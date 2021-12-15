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
      name: 'Translation',
      price: 'US$0.09 per word',
      desc: '10 GB of storage',
    },
    {
      name: 'SUBTITLING',
      price: 'US$7per minute',
      desc: '10 GB of storage',
    },
    {
      name: 'REVIEW',
      price: 'US$0.05 per word',
      desc: '10 GB of storage',
    },
    {
      name: 'POST-EDITING',
      price: 'US$0.07per word',
      desc: '10 GB of storage',
    },
    {
      name: 'FRENCH EDITING',
      price: 'US$0.03 per word',
      desc: '10 GB of storage',
    },
    {
      name: 'TRANSCRIPTION',
      price: 'US$30 per hou',
      desc: '10 GB of storage',
    },
  ];
}
