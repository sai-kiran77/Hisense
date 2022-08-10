import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);


@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainSliderComponent implements OnInit {

  slides = [
    {
      url:'/c/laser-tv',
      image:'https://hisense-apis.bloginguru.com/media/pages/home/laser-tv-slide.png'
    },
    {
      url:'/c/air-conditioner',
      image:'https://hisense-apis.bloginguru.com/media/pages/home/air-conditioner-slide.png'
    },
    {
      image:'https://hisense-apis.bloginguru.com/media/pages/home/tv-A6H-slide.jpg',
      url:'/v/75A6H'
    },
    {
      url:'/v/70A71F',
      image:'https://hisense-apis.bloginguru.com/media/pages/home/tv-70A71F-slide.png'
    },
    {
      url:'/c/qled-tv',
      image:'https://hisense-apis.bloginguru.com/media/pages/home/qled-tv-slide.png'
    },
    {
      url:'/v/65A73F',
      image:'https://hisense-apis.bloginguru.com/media/pages/home/tv-A73F-slide.jpg'
    },
    {
      url:'/v/50A6GE',
      image:'https://hisense-apis.bloginguru.com/media/pages/home/tv-50A6GE-slide.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
