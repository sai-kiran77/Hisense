import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { environment } from 'src/environments/environment';

declare var Swiper: any;

@Component({
  selector: 'app-super-brand',
  templateUrl: './super-brand-days.component.html',
  styleUrls: ['./super-brand-days.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SuperBrandDaysComponent implements OnInit {


  mediaBaseURL = 'https://hisense-production.s3.ap-south-1.amazonaws.com/media/pages/campaigns/super-brand-days-2023/media/';

  // tabs = ["About FIFA 2022", 'Spot Hisense', "Spin the wheel", "Highlights"];
  tabs = ['How to play', "Glimpses", "Terms & Conditions"];
  currentTab = "How to play";

  slides = [
    {
      mobile_image_full_url: `${this.mediaBaseURL}slider-1-slide-1-video.m4v`,
      desktop_image_full_url: `${this.mediaBaseURL}slider-1-slide-1-video.m4v`,
      video_url: `${this.mediaBaseURL}slider-1-slide-1-video.m4v`,
      redirectTo: null,
      type: 'video'
    },
    {
      mobile_image_full_url: `${this.mediaBaseURL}slider-1-slide-2-mobile-image.webp`,
      desktop_image_full_url: `${this.mediaBaseURL}slider-1-slide-2-desktop-image.webp`,
      redirectTo: null,
      type: 'image'
    },
    {
      mobile_image_full_url: `${this.mediaBaseURL}slider-1-slide-2-mobile-image.webp`,
      desktop_image_full_url: `${this.mediaBaseURL}slider-1-slide-2-desktop-image.webp`,
      video_url: `${this.mediaBaseURL}slider-2-slide-1-video.mp4`,
      redirectTo: null,
      type: 'video'
    },
    {
      mobile_image_full_url: `${this.mediaBaseURL}slider-1-slide-2-mobile-image.webp`,
      desktop_image_full_url: `${this.mediaBaseURL}slider-1-slide-2-desktop-image.webp`,
      video_url: `${this.mediaBaseURL}slider-2-slide-2-video.mp4`,
      redirectTo: null,
      type: 'video'
    },
  ]

  currentSlideIndex = 0;
  environment = environment

  yesterdayDate: any;
  spotYesterdayDate: any;


  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private state: GlobalStateService,
    private api: ApiService,
    private title: Title) {
    this.state.mobileNavToggle.next(false);
    this.title.setTitle('Hisense India | Super Brand Days');
  }


  ngOnInit(): void {
    setTimeout(() => {
      const swiper = new Swiper(".mySwiperHome", {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // autoplay: {
        //   delay: 6000,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChange: (e: any) => {
            console.log(swiper.realIndex)
            this.currentSlideIndex = swiper.realIndex;
          },
        },
      });
    })
    this.getSlides();
  }

  ngAfterViewInit() {
  }

  changeTab(tab: any) {
    this.currentTab = tab;
  }

  TermsAndCondObj: any;

  getSlides() {
    this.api.getPageSlides({ pageUrl: '/terms-and-conditions' }).subscribe({
      next: (res: any) => {
        // console.log(res)
        this.TermsAndCondObj = res.data.find((obj: any) => obj.group.code == 'campaign').terms_and_conditions.find((o: any)=>o.tab_name == 'Super Brand Days')
        ;
        // this.currentMainTab = this.metaData[0]?.group?.name
        // this.currentTab = this.metaData[0]?.terms_and_conditions[0]?.tab_name;
      },
      error: (err) => {
        // this.currentMainTab = this.metaData[0]?.group?.name
        // this.currentTab = this.metaData[0]?.terms_and_conditions[0]?.tab_name;
      }
    });
  }

  ngOnDestroy() { }

}
