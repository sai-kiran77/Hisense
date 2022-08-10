import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  row1 = false;
  row2 = false;

  navLinks: any = [
    {
        "text": "TV",
        "url": "/c/tv/",
        "sub-menu": [
            {
                "text": "Laser TV",
                "url": "/c/laser-tv/",
                "image": "https://hisense-demo.bloginguru.com/media/categories/laser-tv-thumb.jpg"
            },
            {
                "text": "Smart TV",
                "url": "/c/smart-tv/",
                "image": "https://hisense-demo.bloginguru.com/media/categories/smart-tv-thumb.png"
            },
            {
                "text": "UHD TV",
                "url": "/c/uhd-tv/",
                "image": "https://hisense-demo.bloginguru.com/media/categories/uhd-tv-thumb.webp"
            },
            {
                "text": "QLED TV",
                "url": "/c/qled-tv/",
                "image": "https://hisense-demo.bloginguru.com/media/categories/qled-tv-thumb.png"
            }
        ]
    },
    {
        "text": "Refrigerator",
        "url": "/c/refrigerator/",
        "sub-menu": [
            {
                "text": "Pure Flat Refrigerators",
                "url": "/c/pure-flat-refrigerators/",
                "image": "https://hisense-demo.bloginguru.com/media/categories/pure-flat-refrigerators-thumb.png"
            },
            {
                "text": "Single door Refrigerators",
                "url": "/c/single-door-refrigerators/",
                "image": "https://hisense-demo.bloginguru.com/media/categories/single-door-refrigerators-thumb.webp"
            },
            {
                "text": "Top Freezer Refrigerators",
                "url": "/c/top-freezer-refrigerators/",
                "image": "https://hisense-demo.bloginguru.com/media/categories/top-freezer-refrigerators-thumb.jpg"
            }
        ]
    },
    {
        "text": "Air Conditioner",
        "url": "/c/air-conditioner/",
        "sub-menu": [
            {
                "text": "Convertible Health Series",
                "url": "/c/convertible-health-series/",
                "image": "https://hisense-demo.bloginguru.com/media/categories/convertible-health-series-thumb.jpg"
            }
        ]
    },
    {
        "text": "Washing Machine",
        "url": "/c/washing-machine/",
        "sub-menu": [
            {
                "text": "Simple Life Series",
                "url": "/c/simple-life-series/",
                "image": "https://hisense-demo.bloginguru.com/media/categories/simple-life-series-thumb.jpg"
            }
        ]
    },
    {
        "text": "Dish Washer",
        "url": "/c/dish-washer/",
        "sub-menu": [
            {
                "text": "Freestanding Dishwasher",
                "url": "/c/freestanding-dishwasher/",

                "image": "https://hisense-demo.bloginguru.com/media/categories/freestanding-dishwasher-thumb.png"
            }
        ]
    }

]

  constructor() { }

  ngOnInit(): void {
  }

}
