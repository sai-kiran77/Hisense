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

    let userName;

    if (isPlatformBrowser(this.platformId)) {
      userName = localStorage.getItem('username');
    }

    if (userName) {
      this.showSignupForm = false;
      this.showLoginForm = false;
      this.getHints(userName);
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
        }
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
