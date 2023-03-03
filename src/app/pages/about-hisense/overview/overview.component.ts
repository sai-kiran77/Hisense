import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private state: GlobalStateService,
    private title: Title) { }

  ngOnInit(): void {
    this.state.mobileNavToggle.next(false);
    this.title.setTitle('Hisense India | Overview');
  }

}
