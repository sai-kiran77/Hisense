import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

declare var Swiper: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  onFirstSlide = false;

  constructor(private state: GlobalStateService,
    private title: Title,
    private meta: Meta,
    private api: ApiService) {
    this.state.mobileNavToggle.next(false);
    this.title.setTitle('Hisense India');
    this.meta.updateTag({
      name: 'description',
      content: "Discover Hisense's latest smart TV & entertainment system, appliances and smartphones designed for your pleasure and convenience."
    })
    this.meta.updateTag({
      name: 'keywords',
      content: "Hisense, Global, Your trusted partner, electronics, TV, Laser TV, Smartphone"
    })
   }

   slides: any = [];
   customerTestimonials = [];

   ngOnInit(): void {
     this.getSlides();
   }

  getSlides() {
    this.api.getPageSlides({ pageUrl: '/' }).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.slides = res.data.home_page_slides;
        this.customerTestimonials = res.data.customer_testimonials;

        setTimeout(()=>{
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
      },
      error: (err: any) => {

      }
    });
  }
}
