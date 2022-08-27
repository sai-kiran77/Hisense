import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-marketing-video',
  templateUrl: './marketing-video.component.html',
  styleUrls: ['./marketing-video.component.scss']
})
export class MarketingVideoComponent implements OnInit {

  baseUrl = environment.baseApiUrl;
  image1 = `${environment.baseApiUrl}/media/pages/home/Hisense-UEFA-Euro-Cup-2020.webp`
  image2 = `${environment.baseApiUrl}/media/pages/home/Hisense-UEFA-Euro-Cup-2020.webp`
  video1 = `${environment.baseApiUrl}/media/pages/home/FIFA-Partnership-Annoucement-Video.mp4`

  playVideo = false;

  constructor() { }

  ngOnInit(): void {
  }

}
