import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offers-promotions',
  templateUrl: './offers-promotions.component.html',
  styleUrls: ['./offers-promotions.component.scss']
})
export class OffersPromotionsComponent implements OnInit {

  metaData: any = [];
  isImageLoading = true;
  tabs = ["Air Conditioner", 'Television'];
  currentMainTab = "Air Conditioner";

  changeMainTab(tab: any) {
    this.currentMainTab = tab;
  }

  ACSectionLeftTabs = ['Inverter expert', 'Intelligent inverter','Intellipro and cooling xpert'];
  currentAcSectionTab = 'Inverter expert';

  changeTab(obj: any) {
    if (this.currentImg != obj.image_full_url) {
      this.isImageLoading = true;
      this.currentImg = obj.image_full_url;
      this.currentTab = obj.start_date_formatted;
    }
  }

  constructor(private state: GlobalStateService,
    private api: ApiService,
    private title: Title) {
    this.state.mobileNavToggle.next(false);
    this.title.setTitle('Hisense India | WARRANTY INFORMATION');
  }

  currentImg: any;
  //  = "https://www.partrunner.com/en/assets/images/banner_image-1200x724.png";
  currentTab: any;

  ngOnInit(): void {
    this.getSlides();
    // this.getTermsAndConditions();
  }


  getSlides() {
    this.api.getPageSlides({ pageUrl: '/offers-promotions' }).subscribe({
      next: (res: any) => {
        console.log(res);
        this.metaData = res.data.offers_promotions;
        this.currentImg = this.metaData[0].image_full_url;
        this.currentTab = this.metaData[0].start_date_formatted;
      },
      error: (err) => {
      }
    });
  }

  imageLoaded() {
    this.isImageLoading = false;
  }

  // ACTermsMetaData:any;

  // getTermsAndConditions() {
  //   this.api.getPageSlides({ pageUrl: '/terms-and-conditions' }).subscribe({
  //     next: ({data}: any) => {
  //       this.ACTermsMetaData = data.terms_and_conditions.filter((obj: any)=>obj.id == 2)?.[0];
  //       if(this.ACTermsMetaData){
  //         // this.metaData = res.data.terms_and_conditions;
  //         // this.currentTab = this.metaData[0].tab_name;
  //         this.ACSectionLeftTabs.unshift("Air Conditioner T & C");
  //         this.currentAcSectionTab = "Air Conditioner T & C";
  //       };
  //     },
  //     error: (err) => {
  //     }
  //   });
  // }

}
