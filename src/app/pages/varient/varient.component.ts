import { Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { environment } from 'src/environments/environment';

interface Spec {
  all_specifications: {
    [key: string]: {
      [key: string]: string;
    };
  }
}

declare var Swiper: any;

@Component({
  selector: 'app-varient',
  templateUrl: './varient.component.html',
  styleUrls: ['./varient.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VarientComponent implements OnInit {

  @ViewChild('productDescription') overview: any;
  @ViewChild('specs') specs: any;

  metaData: any = {};
  alive = true;
  currentIndex = 0;
  show404 = false;
  position = 'translateX(0)';

  showFlag = false;
  // flagImage = `${environment.baseApiUrl}/media/pages/campaigns/delightful-india/flag.png`

  constructor(private route: ActivatedRoute,
    private api: ApiService,
    private state: GlobalStateService,
    private title: Title,
    private meta: Meta,
    private router: Router) {
    this.state.mobileNavToggle.next(false);
  }

  ngOnInit(): void {
    this.route.params.pipe(takeWhile(_ => this.alive)).subscribe(routeParams => {
      this.state.mobileNavToggle.next(false);
      this.loadMetaData(routeParams['varient']);
    });
  }

  seoTags(data: any) {
    this.title.setTitle(data.title);
    this.meta.updateTag({
      name: 'description',
      content: data.description
    })
    data.meta.forEach((obj: any) => {
      if (obj.attributes) {
        for (let key in obj.attributes) {
          this.meta.updateTag({
            property: key,
            content: obj.attributes[key]
          })
        }
      }
    })
  }

  spec: Partial<Spec | undefined>;

  loadMetaData(category: string) {
    this.show404 = false;
    this.api.getVarientData(category).pipe(takeWhile(_ => this.alive)).subscribe({
      next: (res: any) => {
        this.metaData = res.data;
        this.seoTags(res.data.seo_info);
        this.spec = this.metaData['all_specifications'];
        console.log(this.metaData['all_specifications']);
        setTimeout(() => {
          // let swiper = new Swiper(".mySwiper", {
          //   slidesPerView: 1,
          //   spaceBetween: 30,
          //   loop: true,
          //   pagination: {
          //     el: ".swiper-pagination",
          //     clickable: true,
          //   },
          //   autoplay: {
          //     delay: 5000,
          //   },
          //   navigation: {
          //     nextEl: ".swiper-button-next",
          //     prevEl: ".swiper-button-prev",
          //   },
          // });

          let galleryThumbs = new Swiper(".thumbsSlider", {
            // centeredSlides: true,
            // centeredSlidesBounds: true,
            direction: "horizontal",
            spaceBetween: 10,
            slidesPerView: 5,
            // freeMode: false,
            // loop: true,
            // watchSlidesVisibility: true,
            // watchSlidesProgress: true,
            // watchOverflow: true,
            breakpoints: {
              992: {
                direction: "vertical",
                slidesPerView: 5
              }
            }
          });
          let galleryTop = new Swiper(".mySwiper", {
            direction: "horizontal",
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
            // loop: true,
            a11y: {
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
            },
            keyboard: {
              enabled: true,
            },
            thumbs: {
              swiper: galleryThumbs
            }
          });

          galleryTop.on("slideChangeTransitionStart", function () {
            galleryThumbs.slideTo(galleryTop.activeIndex);
          });
          galleryThumbs.on("transitionStart", function () {
            galleryTop.slideTo(galleryThumbs.activeIndex);
          });
        })
      },
      error: (e) => {
        console.log(e);
        this.router.navigate(['']);
        // this.router.navigate(['404']);
        // this.show404 = true;
      }
    })
  }

  // updateCarousel(index: number) {
  //   this.position = `translateX(${index * -100}%)`
  //   this.currentIndex = index;
  // }

  getVendorImage(vendor: string) {
    switch (vendor) {
      case "amazon":
        return 'assets/amazon.png';
      case "flipkart":
        return 'assets/flipkart.png';
      // case "tata_cliq":
      //   return 'assets/tata-cliq.jpg';
      // case "jio_mart":
      //   return 'assets/jiomart.png';
      case "reliance_digital":
        return 'assets/reliance-digital.png';
      case "croma":
        return 'assets/croma.jpg';
      default:
        return '';
    }
  }

  scrollToOverview(){
    this.overview.nativeElement.scrollIntoView({ behavior: "smooth" });
  }

  scrollToSpecs(){
    this.specs.nativeElement.scrollIntoView({ behavior: "smooth" });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
