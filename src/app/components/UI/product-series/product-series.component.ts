import { Component, Inject, Input, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-product-series',
  templateUrl: './product-series.component.html',
  styleUrls: ['./product-series.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductSeriesComponent implements OnInit {

  @Input() title = 'Our TV Series';
  @Input() products: any[] = ['', '', '', ''];
  screenWidth = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (this.platformId == 'browser') {
      this.screenWidth = window.innerWidth;
    }
  }

}
