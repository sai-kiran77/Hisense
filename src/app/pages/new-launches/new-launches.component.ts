import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { environment } from 'src/environments/environment';

declare var Swiper: any;

@Component({
  selector: 'app-new-launches',
  templateUrl: './new-launches.component.html',
  styleUrls: ['./new-launches.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class NewLaunchesComponent implements OnInit {

  environment = environment;

  constructor(private state: GlobalStateService) {
    this.state.mobileNavToggle.next(false);
  }

  ngOnInit(): void {
    setTimeout(() => {
      let swiper = new Swiper(".mySwiperHome", {
        slidesPerView: 1,
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
  }

  slides = [
    {
      mobile_image_full_url: `${environment.baseApiUrl}/media/pages/new-arrivals/slider/1.webp`,
      desktop_image_full_url: `${environment.baseApiUrl}/media/pages/new-arrivals/slider/1.webp`
    },
    {
      mobile_image_full_url: `${environment.baseApiUrl}/media/pages/new-arrivals/slider/2.webp`,
      desktop_image_full_url: `${environment.baseApiUrl}/media/pages/new-arrivals/slider/2.webp`
    },
    {
      mobile_image_full_url: `${environment.baseApiUrl}/media/pages/new-arrivals/slider/3.webp`,
      desktop_image_full_url: `${environment.baseApiUrl}/media/pages/new-arrivals/slider/3.webp`
    },
    {
      mobile_image_full_url: `${environment.baseApiUrl}/media/pages/new-arrivals/slider/4.webp`,
      desktop_image_full_url: `${environment.baseApiUrl}/media/pages/new-arrivals/slider/4.webp`
    }
  ]

}
