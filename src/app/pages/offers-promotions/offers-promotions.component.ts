import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-promotions',
  templateUrl: './offers-promotions.component.html',
  styleUrls: ['./offers-promotions.component.scss']
})
export class OffersPromotionsComponent implements OnInit {

  metaData = [
    {
      image: 'https://www.hisense-india.com/wp-content/uploads/2022/08/Warranty-Announcement-Hisense.webp',
      tab: '5th August 2022'
    },
    {
      image: 'https://www.hisense-india.com/wp-content/uploads/2022/07/Open-Letter-Hisense-July-23-2022.webp',
      tab: '23rd July 2022'
    },
    {
      image: 'https://www.hisense-india.com/wp-content/uploads/2021/12/Open-Letter-Hisense-December-1.jpg',
      tab: '1st Dec 2021'
    },
    {
      image: 'https://www.hisense-india.com/wp-content/uploads/2021/12/Open-Letter-Hisense-December.jpg',
      tab: '18th Nov 2021'
    },
    {
      image: 'https://www.hisense-india.com/wp-content/uploads/2021/09/Open-Letter-Hisense-23-july.jpg',
      tab: '23rd July 2021'
    },
    {
      image: 'https://www.hisense-india.com/wp-content/uploads/2021/09/Open-Letter-Hisense-10-july.jpg',
      tab: '10th July 2021'
    },
    {
      image: 'https://www.hisense-india.com/wp-content/uploads/2021/06/Open-Letter-Hisense.jpg',
      tab: '12th June 2021'
    },
    {
      image: 'https://www.hisense-india.com/wp-content/uploads/2021/05/Open-Letter-Hisense.jpg',
      tab: '1st May 2021'
    },
    {
      image: 'https://www.hisense-india.com/wp-content/uploads/2021/07/Open-Letter-Hisense.jpg',
      tab: '1st January 2021'
    },
    {
      image: 'https://www.hisense-india.com/wp-content/uploads/2020/09/Hisense-Open-Letter-v4-1.jpg',
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
