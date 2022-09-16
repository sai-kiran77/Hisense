import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Routes } from '@angular/router';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  width;
  height;

  @ViewChild(NgxWheelComponent, { static: false }) wheel: any;
  @ViewChild('myaudio', { static: false }) audio: any;


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 768) {
        this.height = 400;
        this.width = 400;
      } else {
        this.height = 500;
        this.width = 500;
      }
    }
  }

  seed = [...Array(12).keys()];
  idToLandOn: any;
  items: any[] = [];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.OUTER;

  ngOnInit() {
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = ["rgb(141,1,248)", "rgb(202,1,111)", "rgb(251,53,1)", "rgb(252,158,2)", "rgb(254,129,3)", "rgb(98,197,47)", "rgb(7,96,237)", "rgb(44,19,248)",];
    this.items = this.seed.map((value, i) => ({
      fillStyle: colors[i] ? colors[i] : colors[i - colors.length],
      // fillStyle: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      text: `Prize ${value}`,
      id: value,
      textFillStyle: "white",
      textFontSize: "16"
    }));
  }

  ngAfterViewInit() {
    // console.log(this.wheel);
  }

  reset() {
    this.wheel.reset();
  }
  before() {
    // alert("Your wheel is about to spin");
  }

  async spin(prize?: any) {
    if (prize) {
      this.idToLandOn = prize;
    } else {
      this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    }
    await new Promise((resolve) => setTimeout(resolve, 0));
    this.wheel.spin();
  }

  after() {
    // alert("You have been bamboozled");
    this.audio.nativeElement.play();
    // audio.play();
    setTimeout(() => {
      alert(`Congratulations you have won Prize ${this.seed[this.idToLandOn]}`);
    }, 750)
    setTimeout(() => {
      this.wheel.reset();
      this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    }, 1000);
  }
}
