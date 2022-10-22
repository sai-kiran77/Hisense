import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-contest-terms-and-conditions',
  templateUrl: './contest-terms-and-conditions.component.html',
  styleUrls: ['./contest-terms-and-conditions.component.scss']
})
export class ContestTermsAndConditionsComponent implements OnInit {

  // currentTab = 'TH'

  metaData: any = [];
  currentIndex = 0;

  changeTab(obj: any,i:number){
    this.currentTab = obj.tab_name;
    this.currentIndex = i;
  }

  constructor(private state: GlobalStateService,
    private api: ApiService) {
    this.state.mobileNavToggle.next(false);
  }

  currentTab: any;

  ngOnInit(): void {
    this.getSlides();
  }

  
  getSlides() {
    this.api.getPageSlides({ pageUrl: '/terms-and-conditions' }).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.metaData = res.data.terms_and_conditions;
        this.currentTab = this.metaData[0].tab_name ;
      },
      error: (err) => {
      }
    });
  }

}
