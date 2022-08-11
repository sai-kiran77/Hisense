import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {

  products = [
    {
      "text": "TV",
      "url": "/c/tv/",
      "image": environment.baseApiUrl + "/media/categories/tv-thumb.jpg"
    },
    {
      "text": "Refrigerator",
      "url": "/c/refrigerator/",
      "image": environment.baseApiUrl + "/media/categories/refrigerator-thumb.png"
    },
    {
      "text": "Air Conditioner",
      "url": "/c/air-conditioner/",
      "image": environment.baseApiUrl + "/media/categories/air-conditioner-thumb.png"
    },
    {
      "text": "Washing Machine",
      "url": "/c/washing-machine/",
      "image": environment.baseApiUrl + "/media/categories/washing-machine-thumb.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
