import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-customer-testimonials',
  templateUrl: './customer-testimonials.component.html',
  styleUrls: ['./customer-testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerTestimonialsComponent implements OnInit {

  @Input() customerTestimonials:any = [];

  constructor() { }

  ngOnInit(): void {
    var swiper = new Swiper(".customer__testiomnial__swiper", {
      slidesPerView: 1,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1023: {
          slidesPerView: 3
        }
      }
    });
  }

  ngAfterViewInit(){
    
  }

}
