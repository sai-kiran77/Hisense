import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delightful-india',
  templateUrl: './delightful-india.component.html',
  styleUrls: ['./delightful-india.component.scss']
})
export class DelightfulIndiaComponent implements OnInit {

  userName: any;
  delightFulCode: any;

  signupForm: FormGroup;
  isSignupFormSubmitted = false;
  signupLoading = false;

  LoginForm: FormGroup;
  isLoginFormSubmitted = false;
  loginLoading = false;

  hints: any = [];

  modalMessage = '';

  showSignupForm = true;
  showLoginForm = false;

  loginData: any;

  constructor(private api: ApiService,
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
      zipcode: ['', [Validators.required]],
      terms: ['', [Validators.required]]
    });

    this.LoginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

    if (isPlatformBrowser(this.platformId)) {
      this.userName = localStorage.getItem('username');
      this.delightFulCode = localStorage.getItem('delightful_india_code');

    }

    if (this.userName) {
      this.showSignupForm = false;
      this.showLoginForm = false;
      this.getHints(this.userName);
    }
  }


  ngOnInit(): void {
  }

  onRegister() {
    this.isSignupFormSubmitted = true;
    this.signupLoading = true;
    console.log(this.signupForm)
    if (this.signupForm && this.signupForm.valid) {
      this.api.signup(this.signupForm.value).subscribe((res: any) => {
        console.log(res);
        this.loginData = res.data;
        this.signupLoading = false;
        // this.modalMessage = res.message;
        // if (isPlatformBrowser(this.platformId)) {
        //   localStorage.setItem('username', res.data.username);
        // }
        this.LoginForm.setValue({
          username: res.data.username,
          password: res.data.password,
        })
        this.showSignupForm = false;
        this.showLoginForm = true;
      }, (err: any) => {
        console.log(err);
        this.signupLoading = false;
        this.modalMessage = err.error.message;
        // this.modalMessage = err.message;
      })
    } else {
      this.signupLoading = false;

    }
  }

  onLogin() {
    this.isLoginFormSubmitted = true;
    this.loginLoading = true;
    console.log(this.LoginForm)
    if (this.LoginForm && this.LoginForm.valid) {
      this.api.login(this.LoginForm.value).subscribe((res: any) => {
        console.log(res);
        this.loginLoading = false;
        this.showSignupForm = false;
        this.showLoginForm = false;
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('delightful_india_code', res.data.delightful_india_code);
        }
        this.userName = res.data.username;
        this.delightFulCode = res.data.delightful_india_code;
        this.hints = res.data.hints;
      }, (err: any) => {
        console.log(err);
        this.loginLoading = false;
        this.modalMessage = err.error.message;
      })
    } else {
      this.loginLoading = false;

    }
  }

  getHints(userName: any) {
    this.api.getHints({
      username: userName
    }).subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.hints = res.data
        this.hints = [
          {
            "hint": "The Remote Finder of A6H Google TV</b> will help you find a flag too",
            "section": "Television",
            "sub_section": "UHD TV"
          },
          {
            "hint": "Triple Color Laser Light of Laser TV</b> has a tricolour Flag for you (Obviously!)",
            "section": "Television",
            "sub_section": "Laser TV"
          },
          {
            "hint": "Flag is waiting With Quantum dot colour U6G TV</b>",
            "section": "Television",
            "sub_section": "QLED TV"
          },
          {
            "hint": "The Remote Finder of A6H Google TV</b> will help you find a flag too",
            "section": "Television",
            "sub_section": "UHD TV"
          },
          {
            "hint": "The 670L RQ670N4SBU</b> Refrigerator has a “Big Capacity” lets find our Flag",
            "section": "Refrigerator",
            "sub_section": "Pure Flat Refrigerators"
          },
          {
            "hint": "The 94L Mini Ref RR94D4SSN</b> feels like Fresh food, chill Mood lets find our hidden flag",
            "section": "Refrigerator",
            "sub_section": "Single Door Refrigerators"
          },
          {
            "hint": "Quickly chill and find a flag in Hisense Intelligent AC 1 TR 5 Star",
            "section": "Air Conditioner",
            "sub_section": null
          },
          {
            "hint": "Visit Family Mode of Hisense Intelligent AC 1 TR 4 Star",
            "section": "Air Conditioner",
            "sub_section": null
          },
          {
            "hint": "The Washing Machine Simple Life Series 7 Kg has 15 Washing Programs and 1 Flag",
            "section": "Washing Machine",
            "sub_section": null
          },
          {
            "hint": "Visit the Snowflake Drum of Washing Machine Simple Life Series 7 Kg... Did you find our Flag???",
            "section": "Washing Machine",
            "sub_section": null
          },
          {
            "hint": "Save 30% energy with Half Load & find 100% out Delightful India flag",
            "section": "Dish Washer",
            "sub_section": null
          }
        ]
      },
      error: (err) => {
        console.log(err);
        this.modalMessage = err.error.message;
        this.showLoginForm = true;
        if (isPlatformBrowser(this.platformId)) {
          localStorage.removeItem('username');
        }
      }
    })
  }

}
