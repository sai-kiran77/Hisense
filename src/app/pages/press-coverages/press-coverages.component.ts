import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

declare var Swiper: any;

@Component({
  selector: 'app-press-coverages',
  templateUrl: './press-coverages.component.html',
  styleUrls: ['./press-coverages.component.scss']
})
export class PressCoveragesComponent implements OnInit {

  @ViewChild('container') container: any;

  totalPagesinTen: any = [];

  // yearRecordsMap: any = {};
  // yearRecordsTabs: any = [];

  params = {
    per_page: 100000,
    page: 1,
    country: 'national'
  }
  metaData: any;
  metaDataTabs = ['National', 'Global'];
  currentTab = 'National';
  // currentSelectedYearTab = 0;

  changeTab(tab: any) {
    this.currentTab = tab;
    this.currentPage = 1;
    if (this.currentTab == 'Global') {
      this.metaData = [];
      this.totalPagesinTen = [];
      this.params.country = 'global';
      this.getMetaData(1);
    } else {
      this.metaData = [];
      this.totalPagesinTen = [];
      this.params.country = 'national';
      this.getMetaData(1);
    }
  }

  // changeYearTab(tab: any) {
  //   this.currentSelectedYearTab = tab;
  // }

  constructor(private api: ApiService,
    private state: GlobalStateService,
    private title: Title) {
    this.state.mobileNavToggle.next(false);
    this.title.setTitle('Hisense India | Press Coverages');
  }

  swiperr: any;
  slides: any = [];

  ngOnInit(): void {
    this.getMetaData();
    setTimeout(() => {
      this.swiperr = new Swiper(".mySwiperPress", {
        slidesPerView: 1,
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // autoplay: {
        //   delay: 6000,
        // },
        initialSlide: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      // this.swiperr.loopDestroy();
      // this.swiperr.loopCreate();
    })
  }

  paginationPageCountinFive = 0;
  currentPage = 1;
  firstPage = 1;
  lastPage = 0;
  metaDataCopyv = [];

  getMetaData(page?: any) {
    if (page) {
      this.params.page = page;
    }

    // this.yearRecordsMap = {};
    // this.yearRecordsTabs = [];
    // this.currentSelectedYearTab = 0;
    this.api.getPressCoverages(this.params).subscribe((res: any) => {
      // res?.data?.data.forEach((obj: any) => {
      //   if (this.yearRecordsMap[obj.published_year]) {
      //     this.yearRecordsMap[obj.published_year].push(obj);
      //   } else {
      //     this.yearRecordsTabs.push(obj.published_year);
      //     this.yearRecordsMap[obj.published_year] = [obj];
      //   }
      // })
      // this.totalPagesinTen = new Array(res.data.last_page);
      // if (this.container) {
      //   this.container.nativeElement.scrollIntoView({ behavior: "smooth" });
      // } 
      // if (this.yearRecordsTabs.length) {
      //   this.currentSelectedYearTab = this.yearRecordsTabs[0];
      // }
      this.metaData = res.data.data
      // .sort((a: any, b: any) => {
      //   const dateA: any = new Date(a.published_at);
      //   const dateB: any = new Date(b.published_at);
      //   return dateB - dateA;
      // });
      this.slides = this.metaData.filter((obj: any)=>obj.is_featured);
      this.swiperr.slideTo(0);
      this.metaDataCopyv = this.metaData;
      const decimal = this.metaDataCopyv.length / 6;
      this.paginationPageCountinFive = Math.ceil(decimal);
      this.lastPage = this.paginationPageCountinFive;
      this.metaData = this.metaDataCopyv.slice(((this.currentPage - 1) * 6), (this.currentPage * 6));
    }, (err) => {
      console.log(err);
    })
  }

  nextPage() {
    if (this.currentPage < this.lastPage) {
      this.currentPage = this.currentPage + 1;
      this.metaData = this.metaDataCopyv.slice(((this.currentPage - 1) * 6), (this.currentPage * 6));
      if (this.container) {
        this.container.nativeElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.metaData = this.metaDataCopyv.slice(((this.currentPage - 1) * 6), (this.currentPage * 6));
      if (this.container) {
        this.container.nativeElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  jumpToPage(pageNumber: any) {
    this.currentPage = pageNumber;
    this.metaData = this.metaDataCopyv.slice(((this.currentPage - 1) * 6), (this.currentPage * 6));
    if (this.container) {
      this.container.nativeElement.scrollIntoView({ behavior: "smooth" });
    }
  }

}
