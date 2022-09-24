import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-perfect-match2022',
  templateUrl: './perfect-match2022.component.html',
  styleUrls: ['./perfect-match2022.component.scss']
})
export class PerfectMatch2022Component implements OnInit {


  width;
  height;
  currentStep = 1;

  @ViewChild(NgxWheelComponent, { static: false }) wheel: any;
  @ViewChild('myaudio', { static: false }) audio: any;

  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
    zipcode: ['', [Validators.required]],
    // terms: ['', [Validators.required]]
  });


  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private fb: FormBuilder,
  private api: ApiService) {
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

  seed = ['Umbrella','Football','Water Bottle','Cap','Washing Machine','TV','FIFA 2022 Ticket','Better luck next time'];
  idToLandOn: any;
  items: any[] = [];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.INNER;

  ngOnInit() {
    this.idToLandOn = Math.floor(Math.random() * this.seed.length);
    // const colors = ["rgb(141,1,248)", "rgb(202,1,111)", "rgb(251,53,1)", "rgb(252,158,2)", "rgb(254,129,3)", "rgb(98,197,47)", "rgb(7,96,237)", "rgb(44,19,248)",];
    const colors = ["#d3a774", "#fff"];
    this.items = this.seed.map((value, i) => ({
      fillStyle: colors[i % 2],
      // fillStyle: colors[i] ? colors[i] : colors[i - colors.length],
      // fillStyle: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      text: `${value}`,
      id: i,
      textFillStyle: "black",
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
    this.isSpinning = true; 
    // alert("Your wheel is about to spin");
  }

  isSpinning = false;

  async spin(prize?: any) {
    if(this.isSpinning){
      return;
    }
    if (prize) {
      this.idToLandOn = prize;
    } else {
      this.idToLandOn = Math.floor(Math.random() * this.seed.length);
    }
    await new Promise((resolve) => setTimeout(resolve, 0));
    this.wheel.spin();
  }

  after() {
    // alert("You have been bamboozled");
    this.audio.nativeElement.play();
    // audio.play();
    this.isSpinning = false;
    setTimeout(() => {
      alert(`Congratulations you have won Prize ${this.seed[this.idToLandOn]}`);
    }, 750)
    setTimeout(() => {
      this.wheel.reset();
      // this.idToLandOn = Math.floor(Math.random() * this.seed.length);
    }, 1000);
  }

  imageLoading = false;

  imageLoaded() {
    this.imageLoading = false;
  }

  isSignupFormSubmitted = false;
  signupLoading = false;
  loggedInUserData: any;

  onSubmit(){
    this.isSignupFormSubmitted = true;
    this.signupLoading = true;
    if (this.signupForm && this.signupForm.valid) {
      this.api.PerfectMatch(this.signupForm.value).subscribe((res: any) => {
        this.loggedInUserData = res.data;
        this.signupLoading = false;
        this.currentStep = 2;
        // this.modalMessage = res.message;
        // if (isPlatformBrowser(this.platformId)) {
        //   localStorage.setItem('username', res.data.username);
        // }
        // this.LoginForm.setValue({
        //   username: res.data.username,
        //   password: res.data.password,
        // })
        // this.showSignupForm = false;
        // this.showLoginForm = true;
        // if (isPlatformBrowser(this.platformId)) {
        //   localStorage.setItem('username', res.data.username);
        //   localStorage.setItem('delightful_india_code', res.data.delightful_india_code);
        // }
      }, (err: any) => {
        console.log(err);
        this.signupLoading = false;
        console.log(err);
        // this.modalMessage = err.error.message;
        // this.modalMessage = err.message;
      })
    } else {
      this.signupLoading = false;

    }
  }
}
