import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

interface stringObj {
  [key: string]: string
}

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
  showHints = false;


  LoginForm: FormGroup;
  isLoginFormSubmitted = false;
  loginLoading = false;

  hints: {
    [key: string]: stringObj[]
  } = {};

  modalMessage = '';

  showSignupForm = true;
  showLoginForm = false;

  loginData: any;

  constructor(private api: ApiService,
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    private state: GlobalStateService) {
    this.state.mobileNavToggle.next(false);

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
        this.hints = {};
        this.showHints = true;
        res.data.hints.forEach((obj: any) => {
          if (this.hints[obj.section]) {
            this.hints[obj.section].push({
              sub_section: obj.sub_section,
              hint: obj.hint
            });
          } else {
            this.hints[obj.section] = [];
            this.hints[obj.section].push({
              sub_section: obj.sub_section,
              hint: obj.hint
            });
          }
        });;
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
        this.hints = {};
        this.showHints = true;
        res.data.forEach((obj: any) => {
          if (this.hints[obj.section]) {
            this.hints[obj.section].push({
              sub_section: obj.sub_section,
              hint: obj.hint
            });
          } else {
            this.hints[obj.section] = [];
            this.hints[obj.section].push({
              sub_section: obj.sub_section,
              hint: obj.hint
            });
          }
        });
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

  logout(){

    this.showSignupForm = false;
    this.showLoginForm = true;
    this.showHints = false;

    localStorage.removeItem('username');
    localStorage.removeItem('delightful_india_code');
  }

}
