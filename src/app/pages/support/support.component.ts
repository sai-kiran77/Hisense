import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor(private state: GlobalStateService,
    private title: Title) { 
    this.state.mobileNavToggle.next(false);
    this.title.setTitle('Hisense India | Support');
  }

  ngOnInit(): void {
  }

}
