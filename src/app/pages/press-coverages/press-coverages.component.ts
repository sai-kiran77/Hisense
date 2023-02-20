import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-press-coverages',
  templateUrl: './press-coverages.component.html',
  styleUrls: ['./press-coverages.component.scss']
})
export class PressCoveragesComponent implements OnInit {

  @ViewChild('container') container: any;

  totalPagesinTen: any = [];

  yearRecordsMap: any = {};
  yearRecordsTabs: any = [];

  params = {
    per_page: 100000,
    page: 1,
    country: 'national'
  }
  metaData: any;
  metaDataTabs = ['National', 'Global'];
  currentTab = 'National';
  currentSelectedYearTab = 0;

  changeTab(tab: any) {
    this.currentTab = tab;
    if (this.currentTab == 'Global') {
      this.metaData = [];
      this.totalPagesinTen = [];
      this.params.country = 'global';
      this.getMetaData(1);
    } else {
      this.metaData = [];
      this.totalPagesinTen = [];
      this.params.country = 'national';
      this.getMetaData(1);
    }
  }

  changeYearTab(tab: any) {
    this.currentSelectedYearTab = tab;
    
  }

  constructor(private api: ApiService,
    private state: GlobalStateService,
    private title: Title) {
    this.state.mobileNavToggle.next(false);
    this.title.setTitle('Hisense India | Press Coverages');
  }

  ngOnInit(): void {
    this.getMetaData();
  }

  getMetaData(page?: any) {
    if (page) {
      this.params.page = page;
    }

    this.yearRecordsMap = {};
    this.yearRecordsTabs = [];
    this.currentSelectedYearTab = 0;
    
    this.api.getPressCoverages(this.params).subscribe((res: any) => {
      res?.data?.data.forEach((obj:any)=>{
        if(this.yearRecordsMap[obj.published_year]){
          this.yearRecordsMap[obj.published_year].push(obj);
        }else{
          this.yearRecordsTabs.push(obj.published_year);
          this.yearRecordsMap[obj.published_year] = [obj];
        }
      })
        // this.totalPagesinTen = new Array(res.data.last_page);
        // if (this.container) {
          //   this.container.nativeElement.scrollIntoView({ behavior: "smooth" });
          // } 
        if(this.yearRecordsTabs.length){
          this.currentSelectedYearTab = this.yearRecordsTabs[0];
        }
        this.metaData = res.data;
      console.log(this.metaData);
      console.log(this.yearRecordsMap, this.yearRecordsTabs )
    }, (err) => {
      console.log(err);
    })
  }

}
