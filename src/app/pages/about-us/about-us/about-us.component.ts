import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private state: GlobalStateService) {
    this.state.mobileNavToggle.next(false);
   }

  ngOnInit(): void {
  }

}
