import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-about-hisense',
  templateUrl: './about-hisense.component.html',
  styleUrls: ['./about-hisense.component.scss']
})
export class AboutHisenseComponent implements OnInit {

  constructor(private state: GlobalStateService,
    private title: Title) {
    this.state.mobileNavToggle.next(false);
    this.title.setTitle('Hisense India | About Hisense');
  }

  ngOnInit(): void {
  }

}
