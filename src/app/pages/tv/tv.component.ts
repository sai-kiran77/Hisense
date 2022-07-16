import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  showFilterSectionInMobile = false;

  toggleFilterInMobile(){
    this.showFilterSectionInMobile = !this.showFilterSectionInMobile;
  }

  slides = [
    {
      desktopImgURL: 'https://global.hisense.com/dam/jcr:77fdc171-7eff-42f1-a790-04a305850d92/hisense-tv-mini-led.jpg',
      mobileImgURL: 'https://global.hisense.com/dam/jcr:e62c0844-fad5-4a05-a991-6e77a48ba471/hisense-tv-dual-cell-mobile.jpg',
      btnText: 'Discover more',
      h2: '',
      p: '',
      h1: 'THE REVOLUTION OF LIGHT',
      h3: 'TV Mini-LED'
    },
    {
      desktopImgURL: 'https://global.hisense.com/dam/jcr:0020183b-6a74-4e9a-b555-aa9527df2d6b/hisense-tv-8k.jpg',
      mobileImgURL: 'https://global.hisense.com/dam/jcr:1ea8115b-368e-422f-9321-6b894bd8f20d/hisense-tv-8k-mobile.jpg',
      btnText: 'Discover more',
      h2: '',
      p: '',
      h1: 'REDISCOVER THE DETAILS',
      h3: 'ULED 8K'
    },
    {
      desktopImgURL: 'https://global.hisense.com/dam/jcr:0a525029-1837-4d62-8e2b-4e5a7a7a5821/hisense-tv-dual-cell.jpg',
      mobileImgURL: 'https://global.hisense.com/dam/jcr:e62c0844-fad5-4a05-a991-6e77a48ba471/hisense-tv-dual-cell-mobile.jpg',
      btnText: 'Discover more',
      h2: '',
      p: '',
      h1: 'INCREDIBLE CONTRAST AT YOUR FINGERTIPS',
      h3: 'DUAL CELL ULED'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
