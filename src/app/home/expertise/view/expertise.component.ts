import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss'],
})
export class ViewExpertiseComponent implements OnInit {
  ngOnInit(): void {
    this.isActiveIdx = this.expertises.length -1;
   }
  
  expertises = [
    { title: 'Translation', content: '#about', img: '' },
    { title: 'Edition', content: '#expertise', img: '' },
    { title: 'Subtitling', content: '#work', img: '' },
  ];
  
  isActiveIdx!: number;

  activateStyle(index: number) {
    this.isActiveIdx = index;
  }
}


