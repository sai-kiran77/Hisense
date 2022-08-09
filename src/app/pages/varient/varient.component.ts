import { Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

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

  constructor(private route:ActivatedRoute,
    private api: ApiService,
    private state: GlobalStateService) {
    this.state.mobileNavToggle.next(false);
  }

  ngOnInit(): void {
    this.route.params.pipe(takeWhile(_=>this.alive)).subscribe(routeParams => {
      console.log(routeParams);
      this.state.mobileNavToggle.next(false);
      this.loadMetaData(routeParams['varient']);
    });
  }
  
  loadMetaData(category: string){
    this.api.getVarientData(category).pipe(takeWhile(_=>this.alive)).subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.metaData = res.data;
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
    console.log(vendor)
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
