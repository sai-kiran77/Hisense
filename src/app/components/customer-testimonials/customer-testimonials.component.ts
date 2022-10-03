import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-customer-testimonials',
  templateUrl: './customer-testimonials.component.html',
  styleUrls: ['./customer-testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerTestimonialsComponent implements OnInit {

  _customerTestimonials: any;
  get customerTestimonials() {
    return this._customerTestimonials
  }
  @Input() set customerTestimonials(val) {
    if (val.length) {
      val.pop();
      this._customerTestimonials = val;
      this.intializeSwiper();
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  intializeSwiper() {
    const swiper = new Swiper(".customer__testiomnial__swiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 6000,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        1023: {
          slidesPerView: 3,
          slidesPerGroup: 3
        }
      }
    });
  }

}
