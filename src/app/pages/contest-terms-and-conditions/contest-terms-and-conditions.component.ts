import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contest-terms-and-conditions',
  templateUrl: './contest-terms-and-conditions.component.html',
  styleUrls: ['./contest-terms-and-conditions.component.scss']
})
export class ContestTermsAndConditionsComponent implements OnInit {

  currentTab = 'TH'

  constructor() { }

  ngOnInit(): void {
  }

}
