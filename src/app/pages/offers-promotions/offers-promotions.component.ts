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

  metaData: any = [];
  isImageLoading = true;
  
  changeTab(obj: any){
    this.isImageLoading = true;
    this.currentImg = obj.image_full_url;
    this.currentTab = obj.start_date_formatted ;
  }

  constructor(private state: GlobalStateService,
    private api: ApiService) {
    this.state.mobileNavToggle.next(false);
  }

  currentImg: any = "https://www.partrunner.com/en/assets/images/banner_image-1200x724.png";
  currentTab: any;

  ngOnInit(): void {
    setTimeout(()=>{
      this.getSlides();
    },5000)
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

  imageLoaded(){
    this.isImageLoading = false;
    console.log('came here');
  }

}
