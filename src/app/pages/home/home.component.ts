import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  onFirstSlide = false;

  constructor(private state: GlobalStateService,
    private title: Title,
    private meta: Meta) {
    this.state.mobileNavToggle.next(false);
    this.title.setTitle('Hisense India');
    this.meta.updateTag({
      name: 'description',
      content: "Discover Hisense's latest smart TV & entertainment system, appliances and smartphones designed for your pleasure and convenience."
    })
    this.meta.updateTag({
      name: 'keywords',
      content: "Hisense, Global, Your trusted partner, electronics, TV, Laser TV, Smartphone"
    })
   }

  ngOnInit(): void {
  }
}
