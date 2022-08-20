import { Component, HostListener } from '@angular/core';

const FIXED_HEADER = 450;
@Component({
  selector: 'view-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class ViewTemplateComponent {
  menu = [
    { name: 'About', path: '#about' },
    { name: 'Expertise', path: '#expertise' },
    { name: 'Work', path: '#work' },
    { name: 'Pricing', path: '#pricing' },
  ];
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let position =
      (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    // let max = document.documentElement.scrollHeight; // NEEDED ?
    // console.log('pos', position, 'max', max);

    // TODO Rework this part with hostBinding ?
    if (position >= FIXED_HEADER) {
      document.querySelector('span')!.style.visibility = 'visible';
      document.querySelector('span')!.style.opacity = '1';
      (document.querySelector('base-header') as HTMLElement)!.style.height = '100px';
      (document.querySelector('base-menu-item') as HTMLElement)!.style.visibility = 'hidden';
      (document.querySelector('base-header') as HTMLElement)!.style.width = '100%';
      document.querySelector('span')!.style.color = 'white';
    } else {
      (document.querySelector('base-menu-item') as HTMLElement)!.style.visibility = 'visible';

      document.querySelector('span')!.style.visibility = 'hidden';
      document.querySelector('span')!.style.opacity = '0';
      document.querySelector('span')!.style.color = 'white';
      (document.querySelector('base-header') as HTMLElement)!.style.height = '200px';
    }
  }
}
