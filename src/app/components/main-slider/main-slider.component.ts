import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

  // {
  //   url:'/delightful-india',
  //   image:`${environment.baseApiUrl}/media/pages/home/Delightful-India-slide.jpg`,
  //   mobile: `${environment.baseApiUrl}/media/pages/home/slider/Delightful india_1x1.jpg`
  // },

  constructor(private api: ApiService) {

  }

  slides: any = [];

  ngOnInit(): void {
    this.getSlides();
  }

  getSlides() {
    this.api.getPageSlides({ pageUrl: '/' }).subscribe({
      next: (res: any) => {
        console.log(res);
        this.slides = res.data.home_page_slides;

        setTimeout(()=>{
          let swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
              delay: 6000,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        })
      },
      error: (err) => {

      }
    });
  }

}
