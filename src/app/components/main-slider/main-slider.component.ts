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

  // {
  //   url:'/delightful-india',
  //   image:`${environment.baseApiUrl}/media/pages/home/Delightful-India-slide.jpg`,
  //   mobile: `${environment.baseApiUrl}/media/pages/home/slider/Delightful india_1x1.jpg`
  // },
  slides = [
    {
      url: '/c/air-conditioner',
      image: `${environment.baseApiUrl}/media/pages/home/slider/slide-1-300822.webp`,
      mobile: `${environment.baseApiUrl}/media/pages/home/slider/TVC-Master-banner-Revised-Mobile.webp`
    },
    {
      url: ' /c/uhd-tv',
      image: `${environment.baseApiUrl}/media/pages/home/slider/slide-2-300822.webp`,
      mobile: `${environment.baseApiUrl}/media/pages/home/slider/Website-Banner-TV-A6H-New-Mobile.webp`
    },
    {
      url: '/v/70A71F',
      image: `${environment.baseApiUrl}/media/pages/home/slider/slide-3-300822.webp`,
      mobile: `${environment.baseApiUrl}/media/pages/home/slider/Website-Banner-TV-Mega-Mobile.webp`
    },
    {
      url: '/v/65U6G',
      image: `${environment.baseApiUrl}/media/pages/home/slider/slide-4-300822.webp`,
      mobile: `${environment.baseApiUrl}/media/pages/home/slider/Website-Banner-TV-Qled-Mobile.webp`
    },
    {
      url: '/v/50A6GE',
      image: `${environment.baseApiUrl}/media/pages/home/slider/slide-5-300822.webp`,
      mobile: `${environment.baseApiUrl}/media/pages/home/slider/Website-Banner-TV-vivid-Mobile.webp`
    },
    {
      url: '/c/refrigerator',
      image: `${environment.baseApiUrl}/media/pages/home/slider/slide-6-300822.webp`,
      mobile: `${environment.baseApiUrl}/media/pages/home/slider/Website-Banner-Fridge-Mobile-15th-Aug.webp`
    },
    {
      url: '/c/washing-machine',
      image: `${environment.baseApiUrl}/media/pages/home/slider/slide-7-300822.webp`,
      mobile: `${environment.baseApiUrl}/media/pages/home/slider/HI-WB-01-04-1920X900-min-2-Mobile.webp`
    },
    {
      url: '/v/H15DSS',
      image: `${environment.baseApiUrl}/media/pages/home/slider/slide-8-300822.webp`,
      mobile: `${environment.baseApiUrl}/media/pages/home/slider/Website-Banner-Dishwasher-Mobile-15th-Aug.webp`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
