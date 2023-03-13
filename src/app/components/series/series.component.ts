import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// // import Swiper core and required modules
// import SwiperCore, { Pagination, Navigation } from "swiper";

// // install Swiper modules
// SwiperCore.use([Pagination, Navigation]);

declare var Swiper: any;


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeriesComponent implements OnInit {

  slides = [
    {
      click_link: '',
      desktop_image_full_url: 'assets/about-hisense/overview/hisense-uled-8k-tv-u80g.jpg',
      mobile_image_full_url: 'assets/about-hisense/overview/hisense-uled-8k-tv-u80g-m.jpg'
    },
    {
      click_link: '',
      desktop_image_full_url: 'https://global.hisense.com/dam/jcr:3fcfa2b7-ca09-45b9-8075-91942d514ce5/hisense-120l5-ultra-short-throw-laser-cinema.jpg',
      mobile_image_full_url: 'https://global.hisense.com/dam/jcr:1cb000f7-112e-4643-a541-ef51b17b3dcc/hisense-120l5-ultra-short-throw-laser-cinema-m.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    let swiper = new Swiper(".laserTvSwiper", {
      slidesPerView: 1,
      loop: true,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      autoplay: {
        delay: 6000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

}
