import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  row1 = false;

  navLinks: any = [
    {
        "text": "TV",
        "url": "/c/tv",
        "sub-menu": [
            {
                "text": "Laser TV",
                "url": "/c/tv",
                "fragment": "laser-tv",
                "image": "assets/header-images/laser-tv.png"
            },
            {
                "text": "Smart TV",
                "url": "/c/tv",
                "fragment": "smart-tv",
                "image": "assets/header-images/smart-tv.png"
            },
            {
                "text": "UHD TV",
                "url": "/c/tv",
                "fragment": "uhd-tv",
                "image": "assets/header-images/uhd-tv.png"
            },
            {
                "text": "QLED TV",
                "url": "/c/tv",
                "fragment": "qled-tv",
                "image": "assets/header-images/qled-tv.png"
            }
        ]
    },
    {
        "text": "Refrigerator",
        "url": "/c/refrigerator",
        "sub-menu": [
            {
                "text": "Pure Flat Refrigerators",
                "url": "/c/refrigerator",
                "fragment": "pure-flat-refrigerators",
                "image": "assets/header-images/pure-flat-refrigerators.png"
            },
            {
                "text": "Single door Refrigerators",
                "url": "/c/refrigerator",
                "fragment": "single-door-refrigerators",
                "image": "assets/header-images/single-door-refrigerators.webp"
            },
            {
                "text": "Top Freezer Refrigerators",
                "url": "/c/refrigerator",
                "fragment": "top-freezer-refrigerators",
                "image": "assets/header-images/top-freezer-refrigerators.jpg"
            }
        ]
    },
    {
        "text": "Air Conditioner",
        "url": "/c/air-conditioner",
        "sub-menu": [
            {
                "text": "Convertible Health Series",
                "url": "/c/air-conditioner",
                "fragment": "convertible-health-series",
                "image": "assets/header-images/convertible-health-series.jpg"
            }
        ]
    },
    {
        "text": "Washing Machine",
        "url": "/c/washing-machine",
        "sub-menu": [
            {
                "text": "Simple Life Series",
                "url": "/c/washing-machine",
                "fragment": "simple-life-series",
                "image": "assets/header-images/simple-life-series.jpg"
            }
        ]
    },
    {
        "text": "Dish Washer",
        "url": "/c/dish-washer",
        "sub-menu": [
            {
                "text": "Freestanding Dishwasher",
                "url": "/c/dish-washer",
                "fragment": "freestanding-dishwasher",
                "image": "assets/header-images/freestanding-dishwasher.png"
            }
        ]
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
