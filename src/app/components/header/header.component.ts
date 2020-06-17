import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { debounce } from 'src/app/shared/debouncing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @ViewChild('mainNavBar') mainNavBar: ElementRef;
  backgroundHeader: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  @debounce()
  doSomethingOnWindowsScroll($event: Event) {
    const scrollOffset = $event.srcElement['children'][0].scrollTop;
    if ( scrollOffset > 100 ) {
      this.backgroundHeader = true;
    } else {
      this.backgroundHeader = false;
    }
  }

}
