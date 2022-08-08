import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  tvMetaData: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getSlugData('tv').subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.tvMetaData = res.data;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

}
