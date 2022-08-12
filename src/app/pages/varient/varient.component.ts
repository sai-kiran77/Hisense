import { Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-varient',
  templateUrl: './varient.component.html',
  styleUrls: ['./varient.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VarientComponent implements OnInit {

  metaData: any;
  alive = true;
  currentIndex = 0;
  position  = 'translateX(0)';

  showFlag = false;
  flagImage = 'https://hisense-apis.bloginguru.com/media/pages/campaigns/delightful-india/flag.png'

  constructor(private route:ActivatedRoute,
    private api: ApiService,
    private state: GlobalStateService) {
    this.state.mobileNavToggle.next(false);
  }

  ngOnInit(): void {
    this.route.params.pipe(takeWhile(_=>this.alive)).subscribe(routeParams => {
      this.state.mobileNavToggle.next(false);
      this.loadMetaData(routeParams['varient']);
    });
  }
  
  loadMetaData(category: string){
    this.api.getVarientData(category).pipe(takeWhile(_=>this.alive)).subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.metaData = res.data;
        if(res.data.code == '75A6H' || res.data.code == '120L9G' || res.data.code == '65U6G' || 
        res.data.code == 'RQ670N4SBU' || res.data.code == 'RR94D4SSN' || res.data.code == 'AS-18TC5RAM0' 
        || res.data.code == 'AS-18TC4RAM1' || res.data.code == 'WFVB6010MS' || res.data.code == 'H15DSS' || 
        res.data.code == 'AS-22TC3RAM0' ||
        res.data.code == '75A6H' ||
        res.data.code == '55A6H' ||
        res.data.code == '50A6H' ||
        res.data.code == '43A6H' ||
        res.data.code == '65U6G' ||
        res.data.code == 'AS-12TC4RAM0' ||
        res.data.code == 'AS-12TC5RAM0' ||
        res.data.code == '55U6G' || res.data.code == 'WFVB7012MS' ){
          this.showFlag = true;
        }
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  updateCarousel(index: number){
    this.position =  `translateX(${index * -100 }%)`
    this.currentIndex = index;
  }

  getVendorImage(vendor: string){
    switch(vendor){
      case "amazon":
      return 'assets/amazon.png';
      case "flipkart":
      return 'assets/flipkart.png';
      case "tata_cliq":
      return 'assets/tata-cliq.jpg';
      case "jio_mart":
      return 'assets/jiomart.png';
      case "reliance_digital":
      return 'assets/reliance-digital.png';
      case "croma":
      return 'assets/croma.jpg';
      default:
        return '';
    }
  }

  ngOnDestroy(){
    this.alive = false;
  }

}
