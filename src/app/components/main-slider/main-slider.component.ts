import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
// import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

// // install Swiper modules
// SwiperCore.use([Pagination, Navigation, Autoplay]);

declare var Swiper: any;

import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainSliderComponent implements OnInit {

  @Input() slides: any = [];

  // {
  //   url:'/delightful-india',
  //   image:`${environment.baseApiUrl}/media/pages/home/Delightful-India-slide.jpg`,
  //   mobile: `${environment.baseApiUrl}/media/pages/home/slider/Delightful india_1x1.jpg`
  // },

  constructor(private api: ApiService) {

  }
  ngOnInit(): void {
  }

}
