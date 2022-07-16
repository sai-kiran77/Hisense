import { Component, Inject, Input, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';

// // import Swiper core and required modules
// import SwiperCore, { Pagination, Navigation } from "swiper";

// // install Swiper modules
// SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-ui-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainSliderUIComponent implements OnInit {

  @Input() pagination = false;
  @Input() navigation = false;
  @Input() loop = false;
  @Input() slides: any[] = [];
  screenWidth: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if(this.platformId == 'browser'){
      this.screenWidth = window.innerWidth;  
    }
  }

}
