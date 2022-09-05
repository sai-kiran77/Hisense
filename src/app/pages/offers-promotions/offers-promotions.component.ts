import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offers-promotions',
  templateUrl: './offers-promotions.component.html',
  styleUrls: ['./offers-promotions.component.scss']
})
export class OffersPromotionsComponent implements OnInit {

  metaData: any = [
    // {
    //   image: `${environment.baseApiUrl}/media/offers-and-promotions/5-August-2022.webp`,
    //   tab: '5th August 2022'
    // },
    // {
    //   image: `${environment.baseApiUrl}/media/offers-and-promotions/23-July-2022.png`,
    //   tab: '23rd July 2022'
    // },
    // {
    //   image: `${environment.baseApiUrl}/media/offers-and-promotions/1-Dec-2021.jpg`,
    //   tab: '1st Dec 2021'
    // },
    // {
    //   image: `${environment.baseApiUrl}/media/offers-and-promotions/18-Nov-2021.jpg`,
    //   tab: '18th Nov 2021'
    // },
    // {
    //   image: `${environment.baseApiUrl}/media/offers-and-promotions/23-July-2021.jpg`,
    //   tab: '23rd July 2021'
    // },
    // {
    //   image: `${environment.baseApiUrl}/media/offers-and-promotions/10-July-2021.jpg`,
    //   tab: '10th July 2021'
    // },
    // {
    //   image: `${environment.baseApiUrl}/media/offers-and-promotions/12-June-2021.jpg`,
    //   tab: '12th June 2021'
    // },
    // {
    //   image: `${environment.baseApiUrl}/media/offers-and-promotions/1-May-2021.jpg`,
    //   tab: '1st May 2021'
    // },
    // {
    //   image: `${environment.baseApiUrl}/media/offers-and-promotions/1-Jan-2021.jpg`,
    //   tab: '1st January 2021'
    // },
    // {
    //   image: `${environment.baseApiUrl}/media/offers-and-promotions/10-September-2021.jpg`,
    //   tab: '10th September 2020'
    // },
  ]

  changeTab(obj: any){
    this.currentImg = obj.image_full_url;
    this.currentTab = obj.start_date_formatted ;
  }

  constructor(private state: GlobalStateService,
    private api: ApiService) {
    this.state.mobileNavToggle.next(false);
  }

  currentImg: any;
  currentTab: any;

  ngOnInit(): void {
    this.getSlides();
  }

  
  getSlides() {
    this.api.getPageSlides({ pageUrl: '/offers-promotions' }).subscribe({
      next: (res: any) => {
        console.log(res);
        this.metaData = res.data.offers_promotions;
        this.currentImg = this.metaData[0].image_full_url;
        this.currentTab = this.metaData[0].start_date_formatted ;
      },
      error: (err) => {
      }
    });
  }

}
