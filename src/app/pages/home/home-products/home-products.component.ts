import { Component, OnInit } from '@angular/core';

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
      "image": "https://hisense-apis.bloginguru.com/media/categories/tv-thumb.jpg"
    },
    {
      "text": "Refrigerator",
      "url": "/c/refrigerator/",
      "image": "https://hisense-apis.bloginguru.com/media/categories/refrigerator-thumb.jpg"
    },
    {
      "text": "Air Conditioner",
      "url": "/c/air-conditioner/",
      "image": "https://hisense-apis.bloginguru.com/media/categories/air-conditioner-thumb.jpg"
    },
    {
      "text": "Washing Machine",
      "url": "/c/washing-machine/",
      "image": "https://hisense-apis.bloginguru.com/media/categories/washing-machine-thumb.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
