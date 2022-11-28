import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-legal-disclaimer',
  templateUrl: './legal-disclaimer.component.html',
  styleUrls: ['./legal-disclaimer.component.scss','../about-us/about-us/about-us.component.scss']
})
export class LegalDisclaimerComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Hisense India | Legal Disclaimer');
   }

  ngOnInit(): void {
  }

}
