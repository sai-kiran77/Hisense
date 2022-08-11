import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainSliderComponent implements OnInit {

  slides = [
    {
      url:'/delightful-india',
      image:`${environment.baseApiUrl}${environment.baseApiUrl}/media/pages/home/Delightful-India-slide.jpg`
    },
    {
      url:'/c/air-conditioner',
      image:`${environment.baseApiUrl}/media/pages/home/air-conditioner-slide.png`
    },
    {
      image:`${environment.baseApiUrl}/media/pages/home/tv-A6H-slide.jpg`,
      url:'/v/75A6H'
    },
    {
      url:'/v/70A71F',
      image:`${environment.baseApiUrl}/media/pages/home/tv-70A71F-slide.png`
    },
    {
      url:'/c/refrigerator',
      image:`${environment.baseApiUrl}/media/pages/home/refrigerator-slide.webp`
    },
    {
      url:'/c/washing-machine',
      image:`${environment.baseApiUrl}/media/pages/home/washing-machine-slide.webp`
    },
    {
      url:'/c/dish-washer',
      image:`${environment.baseApiUrl}/media/pages/home/dishwasher-slide.webp`
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
