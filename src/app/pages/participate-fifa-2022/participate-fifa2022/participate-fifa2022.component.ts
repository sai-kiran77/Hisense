import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TextOrientation, TextAlignment } from 'ngx-wheel';
import { takeWhile } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-participate-fifa2022',
  templateUrl: './participate-fifa2022.component.html',
  styleUrls: ['./participate-fifa2022.component.scss']
})
export class ParticipateFifa2022Component implements OnInit {

  width;
  height;
  currentStep = 1;
  textFontSize = "18";
  alive = true;
  innerRadius = 25;
  terms = false;
  showRegister = true;
  showLogin = false;
  displaySocialLinks = false;

  spinPrizes: any = [];
  classNames = ['one', 'two', 'three', 'four', 'five', 'six'];

  rotateDeg = '0deg';

  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
    zipcode: ['', [Validators.required]],
    // terms: ['', [Validators.required]]
  });


  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private fb: FormBuilder,
    private api: ApiService,
    private state: GlobalStateService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta,
    private toastr: ToastrService,
  ) {
    this.state.mobileNavToggle.next(false);
    this.title.setTitle("Spot Hisense FIFA 2022 contest! | Hisense India");
    this.meta.updateTag({
      name: 'description',
      content: "Participate in #SpotHisense FIFA 2022 contest by Hisense India and get a chance to win goodies!"
    })
    this.meta.updateTag({
      property: "og:description",
      content: "Participate in #SpotHisense FIFA 2022 contest by Hisense India and get a chance to win goodies!"
    })
    this.meta.updateTag({
      property: "og:image",
      content: "https://dev.hisense-india.com/assets/spot-hisense.webp"
    })
    this.meta.updateTag({
      property: "og:site_name",
      content: "Hisense India"
    })
    this.meta.updateTag({
      property: "og:title",
      content: "#SpotHisense FIFA 2022 contest! | Hisense India"
    })
    this.meta.updateTag({
      property: "og:url",
      content: "https://dev.hisense-india.com/FIFA-2022/participate"
    })
    if (isPlatformBrowser(this.platformId)) {
      // if (window.innerWidth <= 375) {
      //   this.height = 300;
      //   this.width = 300;
      //   this.textFontSize = "10";
      // } else if (window.innerWidth <= 450) {
      //   this.height = 340;
      //   this.width = 340;
      // } else if (window.innerWidth <= 576) {
      //   this.height = 375;
      //   this.width = 375;
      //   this.textFontSize = "11";
      // } else 
      if (window.innerWidth <= 768) {
        this.textFontSize = "12";
        this.height = 350;
        this.width = 350;
        this.innerRadius = 20;
      } else {
        this.height = 500;
        this.width = 500;
      }
    }
  }

  seed = ['Umbrella', 'Football', 'Water Bottle', 'Cap', 'Washing Machine', 'TV', 'FIFA 2022 Ticket', 'Better luck next time'];
  idToLandOn: any;
  items: any[] = [];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.INNER;

  ngOnInit() {
    this.route.params.pipe(takeWhile(_ => this.alive)).subscribe((routeParams: any) => {
      if (routeParams['uuid']) {
        this.currentStep = 4;
        this.getRegistrationSummary(routeParams['uuid']);
      }
    });
  }

  getRegistrationSummary(uuid: any) {
    const params = {
      registration_uuid: uuid
    }
    this.api.fifaRegistrationSummary(params).subscribe((res: any) => {
      if (res?.data?.next_step == 'thank_you') {
        this.thankYouImage = res?.data?.uploaded_image_file_full_url;
        // this.thankYouMessage = res?.data?.next_step_data?.thank_you?.campaign_perfect_match_2022_spin_wheel_prize?.message;
        this.socialLinks = res?.data?.social_share_links
        this.currentStep = 4;
        this.seoTags(res?.data?.seo_info);
      }
    }, (err: any) => {
      console.log(err);
      this.toastr.error(err.error.message)
      this.router.navigate(['/FIFA-2022/participate']);
    })
  }

  ngAfterViewInit() {
  }

  seoTags(data: any) {
    this.title.setTitle(data.title);
    this.meta.updateTag({
      name: 'description',
      content: data.description
    })
    const obj = data?.meta;
    // data.meta.forEach((obj: any) => {
    if (obj) {
      for (let key in obj.attributes) {
        this.meta.updateTag({
          property: key,
          content: obj.attributes[key]
        })
      }
    }
    // })
  }


  isSpinning = false;
  thankYouImage: any;
  thankYouMessage: any;
  thankYouUUID: any;
  socialLinks: any;

  imageLoading = true;

  imageLoaded() {
    this.imageLoading = false;
  }

  isSignupFormSubmitted = false;
  signupLoading = false;
  loggedInData: any;

  onSubmit() {
    this.isSignupFormSubmitted = true;
    this.signupLoading = true;
    let apiCall = this.api.fifaRegister(this.signupForm.value);
    let isFormValid = false;
    if(this.showLogin){
      if(this.terms && this.signupForm.value.phone){
        isFormValid = true;
        apiCall = this.api.fifaLogin({ phone: this.signupForm.value.phone });
      }
    }
    if (this.signupForm && this.signupForm.valid && this.terms || isFormValid) {
      apiCall.subscribe((res: any) => {
        this.loggedInData = res?.data;
        this.signupLoading = false;
        // console.log(res);
        if (res?.data?.next_step == "upload_image") {
          this.currentStep = 2;

        }

        if (res?.data?.next_step == 'thank_you') {
          this.router.navigate(['/FIFA-2022/participate', res?.data?.uuid]);
        }
      }, (err: any) => {
        this.signupLoading = false;
        console.log(err);
        this.toastr.error(err.error.message);
      })
    } else {
      this.signupLoading = false;
    }
  }

  isFileSubmitted = false;
  fileupLoading = false;

  onFileSubmit() {
    this.isFileSubmitted = true;
    this.fileupLoading = true;
    if (this.file && this.filename) {
      const formData = new FormData();
      formData.append('uploaded_image', this.file);
      formData.append('uuid', this.loggedInData.uuid);
      this.api.uploadFifaScreenshot(formData).subscribe((res: any) => {
        this.fileupLoading = false;
        if (res?.data?.next_step == 'thank_you') {
          this.router.navigate(['/FIFA-2022/participate', res?.data?.uuid]);
        }
      }, (err: any) => {
        this.fileupLoading = false;
        this.toastr.error(err);
      })
    } else {
      this.fileupLoading = false;
    }
  }

  file: any;
  filename: any;
  uploadedImage: any;

  browseFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
      this.filename = file.name;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.uploadedImage = reader.result;
      };
      reader.onerror = (error) => {
        // this.commonService.showNotification(error, ENotificationTypeStyle.warning);
        console.log(error);
        this.toastr.error('Something went Wrong!');
      };
    }
  }

}
