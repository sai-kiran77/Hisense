import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

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
                    "image": environment.baseApiUrl + "/media/categories/laser-tv-thumb.jpg"
                },
                {
                    "text": "Smart TV",
                    "url": "/c/smart-tv/",
                    "image": environment.baseApiUrl + "/media/categories/smart-tv-thumb.png"
                },
                {
                    "text": "UHD TV",
                    "url": "/c/uhd-tv/",
                    "image": environment.baseApiUrl + "/media/categories/uhd-tv-thumb.webp"
                },
                {
                    "text": "QLED TV",
                    "url": "/c/qled-tv/",
                    "image": environment.baseApiUrl + "/media/categories/qled-tv-thumb.png"
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
                    "image": environment.baseApiUrl + "/media/categories/pure-flat-refrigerators-thumb.png"
                },
                {
                    "text": "Single door Refrigerators",
                    "url": "/c/single-door-refrigerators/",
                    "image": environment.baseApiUrl + "/media/categories/single-door-refrigerators-thumb.png"
                },
                {
                    "text": "Top Freezer Refrigerators",
                    "url": "/c/top-freezer-refrigerators/",
                    "image": environment.baseApiUrl + "/media/categories/top-freezer-refrigerators-thumb.png"
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
                    "image": environment.baseApiUrl + "/media/categories/convertible-health-series-thumb.png"
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
                    "image": environment.baseApiUrl + "/media/categories/simple-life-series-thumb.png"
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
                    "image": environment.baseApiUrl + "/media/categories/freestanding-dishwasher-thumb.png"
                }
            ]
        }
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
