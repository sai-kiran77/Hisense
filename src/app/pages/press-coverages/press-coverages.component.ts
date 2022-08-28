import { Component, OnInit, ViewChild } from '@angular/core';
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

  params = {
    per_page: 10,
    page: 1
  }
  metaData: any;

  constructor(private api: ApiService,
    private state: GlobalStateService) { 
    this.state.mobileNavToggle.next(false);
  }

  ngOnInit(): void {
    this.getMetaData();
  }
  
  getMetaData(page?: any){
    if(page){
      this.params.page = page;
    }
    this.api.getPressCoverages(this.params).subscribe((res: any)=>{
      this.metaData = res.data;
      this.totalPagesinTen = new Array(res.data.last_page);
      if(this.container){
        this.container.nativeElement.scrollIntoView({behavior: "smooth"});
      }
    },(err)=>{
      console.log(err);
    })
  }

}
