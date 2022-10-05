import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'view-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ViewContactComponent {
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
