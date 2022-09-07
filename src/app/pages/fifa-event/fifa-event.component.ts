import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fifa-event',
  templateUrl: './fifa-event.component.html',
  styleUrls: ['./fifa-event.component.scss']
})
export class FifaEventComponent implements OnInit {

  days: any = '00';
  hours: any = '00';
  minutes: any = '00';
  seconds: any;
  x: any;

  environment = environment

  fifaDetails = {
    "desktop_image": "slide-1-300822.webp",
    "mobile_image": "slide-1-300822-mobile.webp",
    "desktop_image_full_url": `${environment.baseApiUrl}/media/pages/campaigns/fifa-2022/FIFA-World-Cup-Banner-Desktop.webp`,
    "mobile_image_full_url": `${environment.baseApiUrl}/media/pages/campaigns/fifa-2022/FIFA-World-Cup-Banner-Mobile.webp`
  }

  constructor() {
    console.log('from fifa');
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    console.log('chnage detected');
  }

  ngOnDestroy(){
    if(this.x){
      clearInterval(this.x);
    }
  }

}
