import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offers-promotions',
  templateUrl: './offers-promotions.component.html',
  styleUrls: ['./offers-promotions.component.scss']
})
export class OffersPromotionsComponent implements OnInit {

  metaData = [
    // {
    //   image: `${environment.baseApiUrl}/wp-content/uploads/2022/08/Warranty-Announcement-Hisense.webp',
    //   tab: '5th August 2022'
    // },
    {
      image: `${environment.baseApiUrl}/media/offers-and-promotions/23-July-2021.jpg`,
      tab: '23rd July 2022'
    },
    {
      image: `${environment.baseApiUrl}/media/offers-and-promotions/1-Dec-2021.jpg`,
      tab: '1st Dec 2021'
    },
    {
      image: `${environment.baseApiUrl}/media/offers-and-promotions/18-Nov-2021.jpg`,
      tab: '18th Nov 2021'
    },
    {
      image: `${environment.baseApiUrl}/media/offers-and-promotions/23-July-2022.jpg`,
      tab: '23rd July 2021'
    },
    {
      image: `${environment.baseApiUrl}/media/offers-and-promotions/10-July-2021.jpg`,
      tab: '10th July 2021'
    },
    {
      image: `${environment.baseApiUrl}/media/offers-and-promotions/12-June-2021.jpg`,
      tab: '12th June 2021'
    },
    {
      image: `${environment.baseApiUrl}/media/offers-and-promotions/1-May-2021.jpg`,
      tab: '1st May 2021'
    },
    {
      image: `${environment.baseApiUrl}/media/offers-and-promotions/1-Jan-2021.jpg`,
      tab: '1st January 2021'
    },
    {
      image: `${environment.baseApiUrl}/media/offers-and-promotions/10-September-2021.jpg`,
      tab: '10th September 2020'
    },
  ]

  currentImg = this.metaData[0].image;
  currentTab = this.metaData[0].tab;

  changeTab(obj: any){
    this.currentImg = obj.image;
    this.currentTab = obj.tab;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
