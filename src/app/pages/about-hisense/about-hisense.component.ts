import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-about-hisense',
  templateUrl: './about-hisense.component.html',
  styleUrls: ['./about-hisense.component.scss']
})
export class AboutHisenseComponent implements OnInit {

  constructor(private state: GlobalStateService) {
    this.state.mobileNavToggle.next(false);
  }

  ngOnInit(): void {
  }

}
