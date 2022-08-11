import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-contest-terms-and-conditions',
  templateUrl: './contest-terms-and-conditions.component.html',
  styleUrls: ['./contest-terms-and-conditions.component.scss']
})
export class ContestTermsAndConditionsComponent implements OnInit {

  currentTab = 'TH'

  constructor(private state: GlobalStateService) {
    this.state.mobileNavToggle.next(false);

   }

  ngOnInit(): void {
  }

}
