import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor(private state: GlobalStateService) { 
    this.state.mobileNavToggle.next(false);
  }

  ngOnInit(): void {
  }

}
