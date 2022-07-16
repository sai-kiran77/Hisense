import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-video',
  templateUrl: './marketing-video.component.html',
  styleUrls: ['./marketing-video.component.scss']
})
export class MarketingVideoComponent implements OnInit {

  playVideo = false;

  constructor() { }

  ngOnInit(): void {
  }

}
