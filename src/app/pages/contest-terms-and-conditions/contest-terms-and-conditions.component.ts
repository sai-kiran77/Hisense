import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  changeTab(obj: any, i: number) {
    this.currentTab = obj.tab_name;
    this.currentIndex = i;
  }

  constructor(private state: GlobalStateService,
    private api: ApiService,
    private title: Title) {
    this.title.setTitle('Hisense India | TERMS AND CONDITIONS');
    this.state.mobileNavToggle.next(false);
  }

  currentTab: any;

  ngOnInit(): void {
    this.getSlides();
  }


  getSlides() {
    this.api.getPageSlides({ pageUrl: '/terms-and-conditions' }).subscribe({
      next: (res: any) => {
        // console.log(res)
        this.metaData = res.data.terms_and_conditions.filter((obj: any) => obj.tab_name !== 'Air conditioner T&C');
        this.currentTab = this.metaData[0].tab_name;
      },
      error: (err) => {
      }
    });
  }

}
