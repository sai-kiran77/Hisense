import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { environment } from 'src/environments/environment';

declare var Swiper: any;

@Component({
  selector: 'app-fifa-event',
  templateUrl: './fifa-event.component.html',
  styleUrls: ['./fifa-event.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FifaEventComponent implements OnInit {

  @ViewChild('Highlights') HighlightsRef: ElementRef | any;

  days: any = '00';
  hours: any = '00';
  minutes: any = '00';
  seconds: any = '00';
  x: any;

  tabs = ["About FIFA 2022", 'Spot Hisense', "Spin the wheel", "Highlights"];
  currentTab = "About FIFA 2022";

  slides = [
    {
      mobile_image_full_url: `${environment.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-1-mobile.webp`,
      desktop_image_full_url: `${environment.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-1-desktop.webp`,
      redirectTo: null
    },
    {
      mobile_image_full_url: `assets/spot-hisense-mobile-banner-with-button.webp`,
      desktop_image_full_url: `assets/spot-hisense.webp`,
      redirectTo: '/FIFA-2022/participate'
    },
    {
      mobile_image_full_url: `${environment.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-2-mobile.webp`,
      desktop_image_full_url: `${environment.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-2-desktop.webp`,
      redirectTo: '/perfect-match-2022'
    }
  ]

  // spotHisenseRegistrationsDB = [
  //   {
  //     user: {
  //       name: 'REKHA GOSWAMI',
  //       phone: '7828****49',
  //       date: '2022-11-30'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'ISHA BHATTACHARYA',
  //       phone: '9713****36',
  //       date: '2022-11-30'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Abdullakkutty kattoor',
  //       phone: '8075****69',
  //       date: '2022-11-30'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Manisha Ruhu',
  //       phone: '7409****67',
  //       date: '2022-11-30'
  //     },
  //   },

  //   {
  //     user: {
  //       name: 'Bharat Gothwal',
  //       phone: '8295****15',
  //       date: '2022-11-29'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Richa jaiswal',
  //       phone: '9312****83',
  //       date: '2022-11-29'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'ASHIK TA',
  //       phone: '8137****23',
  //       date: '2022-11-29'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Vaibhava Singh',
  //       phone: '8923****33',
  //       date: '2022-11-29'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Reeta Karki',
  //       phone: '9007****08',
  //       date: '2022-11-29'
  //     },
  //   },

  //   {
  //     user: {
  //       name: 'Ajay Kumar Sahoo',
  //       phone: '9355****06',
  //       date: '2022-11-28'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Fazal rasul',
  //       phone: '9752****71',
  //       date: '2022-11-28'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'VIGNESH M',
  //       phone: '7299****43',
  //       date: '2022-11-28'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Aripan Ray',
  //       phone: '9432****13',
  //       date: '2022-11-28'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Jot',
  //       phone: '9781****42',
  //       date: '2022-11-28'
  //     },
  //   },

  //   {
  //     user: {
  //       name: 'AYAN DAS',
  //       phone: '9748****38',
  //       date: '2022-11-27'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Sengodan Ramasamy',
  //       phone: '9447****85',
  //       date: '2022-11-27'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'TaniyaMannaDas',
  //       phone: '8910****00',
  //       date: '2022-11-27'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Navjot',
  //       phone: '6397****49',
  //       date: '2022-11-27'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Avijit Chatterjee',
  //       phone: '8100****36',
  //       date: '2022-11-27'
  //     },
  //   },

  //   {
  //     user: {
  //       name: 'Gunjan Agrawal',
  //       phone: '6397****49',
  //       date: '2022-11-26'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Lakshmi Raghuraman',
  //       phone: '9791****31',
  //       date: '2022-11-26'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Ranjeet Banerjee',
  //       phone: '7376****84',
  //       date: '2022-11-26'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Tapas Sarkar',
  //       phone: '9863****11',
  //       date: '2022-11-26'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Karun Padington',
  //       phone: '9611****26',
  //       date: '2022-11-26'
  //     },
  //   },

  //   {
  //     user: {
  //       name: 'Antara Chongder',
  //       phone: '9330****90',
  //       date: '2022-11-25'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Anwar Basha',
  //       phone: '8939****40',
  //       date: '2022-11-25'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Neha',
  //       phone: '9267****12',
  //       date: '2022-11-25'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Paramjit',
  //       phone: '8872****20',
  //       date: '2022-11-25'
  //     },
  //   },

  //   {
  //     user: {
  //       name: 'Sarika Porwal',
  //       phone: '8218****55',
  //       date: '2022-11-24'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Paresh Rathod',
  //       phone: '9904****05',
  //       date: '2022-11-24'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Sundararajan',
  //       phone: '9940****02',
  //       date: '2022-11-24'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Gayathri Mohan',
  //       phone: '8056****10',
  //       date: '2022-11-24'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Kuldeep Kumar',
  //       phone: '9431****11',
  //       date: '2022-11-24'
  //     },
  //   },

  //   {
  //     user: {
  //       name: 'Yatendra agrawal',
  //       phone: '8923****62',
  //       date: '2022-11-23'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Souvik Paul',
  //       phone: '9564****86',
  //       date: '2022-11-23'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Murlidhar',
  //       phone: '9783****52',
  //       date: '2022-11-23'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Jathin M Jaishur',
  //       phone: '9567****04',
  //       date: '2022-11-23'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Rubalpreet Singh',
  //       phone: '9872****20',
  //       date: '2022-11-23'
  //     },
  //   },

  //   {
  //     user: {
  //       name: 'Aarav Singh',
  //       phone: '7017****12',
  //       date: '2022-11-22'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Sandeep Kaundal',
  //       phone: '9736****07',
  //       date: '2022-11-22'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Chetan Maisuria',
  //       phone: '8401****06',
  //       date: '2022-11-22'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Mandira Moitra',
  //       phone: '9831****21',
  //       date: '2022-11-22'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Sucharita Sahu',
  //       phone: '8010****67',
  //       date: '2022-11-22'
  //     },
  //   },

  //   {
  //     user: {
  //       name: 'Vaishali Maisuria',
  //       phone: '9904****53',
  //       date: '2022-11-21'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Rakhi Ambore',
  //       phone: '8882****37',
  //       date: '2022-11-21'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Sanchita Mittal',
  //       phone: '9313****72',
  //       date: '2022-11-21'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Manisha Swarnkar',
  //       phone: '9413****67',
  //       date: '2022-11-21'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'PurushothamPatel',
  //       phone: '9731****36',
  //       date: '2022-11-21'
  //     },
  //   },

  //   {
  //     user: {
  //       name: 'Nalini Sivakumar',
  //       phone: '9790****49',
  //       date: '2022-11-20'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'SONALI SASMAL BERA',
  //       phone: '9733****18',
  //       date: '2022-11-20'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'karanmantri',
  //       phone: '9022****56',
  //       date: '2022-11-20'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Farhan Ansari',
  //       phone: '8802****81',
  //       date: '2022-11-20'
  //     },
  //   },
  //   {
  //     user: {
  //       name: 'Akash Kumar',
  //       phone: '8210****79',
  //       date: '2022-11-20'
  //     },
  //   }
  // ]

  spotHisenseRegistrationsDB = [
    {
      "name": "Nalini Sivakumar",
      "phone": 9790840349,
      "date": "2022-11-20"
    },
    {
      "name": "SONALI SASMAL BERA",
      "phone": 9733284718,
      "date": "2022-11-20"
    },
    {
      "name": "karanmantri",
      "phone": 9022149456,
      "date": "2022-11-20"
    },
    {
      "name": "Farhan Ansari",
      "phone": 8802095181,
      "date": "2022-11-20"
    },
    {
      "name": "Akash Kumar",
      "phone": 8210921679,
      "date": "2022-11-20"
    },
    {
      "name": "Vaishali Maisuria",
      "phone": 9904803453,
      "date": "2022-11-21"
    },
    {
      "name": "Rakhi Ambore",
      "phone": 8882397937,
      "date": "2022-11-21"
    },
    {
      "name": "Sanchita Mittal",
      "phone": 9313783972,
      "date": "2022-11-21"
    },
    {
      "name": "Manisha Swarnkar",
      "phone": 9413500460,
      "date": "2022-11-21"
    },
    {
      "name": "PurushothamPatel",
      "phone": 9731380036,
      "date": "2022-11-21"
    },
    {
      "name": "Aarav Singh",
      "phone": 7017083312,
      "date": "2022-11-22"
    },
    {
      "name": "Sandeep Kaundal",
      "phone": 9736250507,
      "date": "2022-11-22"
    },
    {
      "name": "Chetan Maisuria",
      "phone": 8401407906,
      "date": "2022-11-22"
    },
    {
      "name": "Mandira Moitra",
      "phone": 9831345721,
      "date": "2022-11-22"
    },
    {
      "name": "Sucharita Sahu",
      "phone": 8010764567,
      "date": "2022-11-22"
    },
    {
      "name": "Yatendra agrawal",
      "phone": 8923891962,
      "date": "2022-11-23"
    },
    {
      "name": "Souvik Paul",
      "phone": 9564575886,
      "date": "2022-11-23"
    },
    {
      "name": "Murlidhar",
      "phone": 9783102152,
      "date": "2022-11-23"
    },
    {
      "name": "Jathin M Jaishur",
      "phone": 9567650604,
      "date": "2022-11-23"
    },
    {
      "name": "Rubalpreet Singh",
      "phone": 9872226320,
      "date": "2022-11-23"
    },
    {
      "name": "Sarika Porwal",
      "phone": 8218842155,
      "date": "2022-11-24"
    },
    {
      "name": "Paresh Rathod",
      "phone": 9904954605,
      "date": "2022-11-24"
    },
    {
      "name": "Sundararajan",
      "phone": 9940387202,
      "date": "2022-11-24"
    },
    {
      "name": "Gayathri Mohan",
      "phone": 8056583910,
      "date": "2022-11-24"
    },
    {
      "name": "Kuldeep Kumar",
      "phone": 9431100911,
      "date": "2022-11-24"
    },
    {
      "name": "Antara Chongder",
      "phone": 9330881190,
      "date": "2022-11-25"
    },
    {
      "name": "neha",
      "phone": 9267928112,
      "date": "2022-11-25"
    },
    {
      "name": "Paramjit",
      "phone": 8872826320,
      "date": "2022-11-25"
    },
    {
      "name": "Anwar Basha",
      "phone": 8939201140,
      "date": "2022-11-25"
    },
    {
      "name": "Gunjan Agrawal",
      "phone": 6397544949,
      "date": "2022-11-26"
    },
    {
      "name": "Lakshmi Raghuraman",
      "phone": 9791183331,
      "date": "2022-11-26"
    },
    {
      "name": "Ranjeet Banerjee",
      "phone": 7376332084,
      "date": "2022-11-26"
    },
    {
      "name": "Tapas Sarkar",
      "phone": 9863654911,
      "date": "2022-11-26"
    },
    {
      "name": "Karun Padington",
      "phone": 9611652526,
      "date": "2022-11-26"
    },
    {
      "name": "AYAN DAS",
      "phone": 9748022438,
      "date": "2022-11-27"
    },
    {
      "name": "Sengodan Ramasamy",
      "phone": 9447410485,
      "date": "2022-11-27"
    },
    {
      "name": "TaniyaMannaDas",
      "phone": 8910143600,
      "date": "2022-11-27"
    },
    {
      "name": "Navjot",
      "phone": 9463323369,
      "date": "2022-11-27"
    },
    {
      "name": "Avijit Chatterjee",
      "phone": 8100137236,
      "date": "2022-11-27"
    },
    {
      "name": "Ajay Kumar Sahoo",
      "phone": 9355104806,
      "date": "2022-11-28"
    },
    {
      "name": "Fazal rasul",
      "phone": 9752490871,
      "date": "2022-11-28"
    },
    {
      "name": "VIGNESH M",
      "phone": 7299209943,
      "date": "2022-11-28"
    },
    {
      "name": "Aripan Ray",
      "phone": 9432180513,
      "date": "2022-11-28"
    },
    {
      "name": "Jot",
      "phone": 9781346542,
      "date": "2022-11-28"
    },
    {
      "name": "Bharat Gothwal",
      "phone": 8295229015,
      "date": "2022-11-29"
    },
    {
      "name": "Richa jaiswal",
      "phone": 9312160083,
      "date": "2022-11-29"
    },
    {
      "name": "ASHIK TA",
      "phone": 8137855223,
      "date": "2022-11-29"
    },
    {
      "name": "Vaibhava Singh",
      "phone": 8923333433,
      "date": "2022-11-29"
    },
    {
      "name": "Reeta Karki",
      "phone": 9007066808,
      "date": "2022-11-29"
    },
    {
      "name": "REKHA GOSWAMI",
      "phone": 7828564949,
      "date": "2022-11-30"
    },
    {
      "name": "ISHA BHATTACHARYA",
      "phone": 9713215036,
      "date": "2022-11-30"
    },
    {
      "name": "Abdullakkutty kattoor",
      "phone": 8075357069,
      "date": "2022-11-30"
    },
    {
      "name": "Manisha Ruhu",
      "phone": 7409542567,
      "date": "2022-11-30"
    },
    {
      "name": "Janaki Senthil",
      "phone": 6382852247,
      "date": "2022-12-01"
    },
    {
      "name": "Dhara Tushar Unadkat",
      "phone": 9106073335,
      "date": "2022-12-01"
    },
    {
      "name": "Mani Kamal Singha Roy",
      "phone": 6291808812,
      "date": "2022-12-01"
    },
    {
      "name": "Paritosh Ghosh",
      "phone": 9002959442,
      "date": "2022-12-01"
    },
    {
      "name": "Rahul Ranjan",
      "phone": 8804740491,
      "date": "2022-12-01"
    },
    {
      "name": "Mohamed Abubacker",
      "phone": 8015164701,
      "date": "2022-12-02"
    },
    {
      "name": "Selvi",
      "phone": 6369305150,
      "date": "2022-12-02"
    },
    {
      "name": "Sandeep",
      "phone": 9896616601,
      "date": "2022-12-02"
    },
    {
      "name": "Durga Prasad Sharma",
      "phone": 9306644912,
      "date": "2022-12-02"
    },
    {
      "name": "Ashish Jain",
      "phone": 9560907653,
      "date": "2022-12-02"
    },
    {
      "name": "MANISH R GOSWAMI",
      "phone": 7869396075,
      "date": "2022-12-03"
    },
    {
      "name": "ASHISH KUMAR GOSWAMI",
      "phone": 9893452747,
      "date": "2022-12-03"
    },
    {
      "name": "Priyanka shiyalvala",
      "phone": 7802890426,
      "date": "2022-12-03"
    },
    {
      "name": "Mohamed Fadhil C",
      "phone": 8943045508,
      "date": "2022-12-03"
    },
    {
      "name": "Shilpa Sharma",
      "phone": 9817887269,
      "date": "2022-12-03"
    },
    {
      "name": "Harsh Patel",
      "phone": 7065711497,
      "date": "2022-12-04"
    },
    {
      "name": "Disha soni",
      "phone": 7723980739,
      "date": "2022-12-04"
    },
    {
      "name": "Sapna Chawla",
      "phone": 7020317835,
      "date": "2022-12-04"
    },
    {
      "name": "Priya Naik",
      "phone": 7588923715,
      "date": "2022-12-04"
    },
    {
      "name": "Mem Khan",
      "phone": 9828197997,
      "date": "2022-12-04"
    },
    {
      "name": "Sarita Pradhan",
      "phone": 9958107560,
      "date": "2022-12-05"
    },
    {
      "name": "Ashwin Kumar",
      "phone": 9343330901,
      "date": "2022-12-05"
    },
    {
      "name": "Hetal Wadhan",
      "phone": 9904468867,
      "date": "2022-12-05"
    },
    {
      "name": "Samita Singha Roy",
      "phone": 8013930625,
      "date": "2022-12-05"
    },
    {
      "name": "RAHUL",
      "phone": 9643721341,
      "date": "2022-12-05"
    },

    {
      "name": "SANDEEP SARKAR",
      "phone": 9432326559,
      "date": "2022-12-06"
    },
    {
      "name": "RASHU SARAOGI",
      "phone": 9830605946,
      "date": "2022-12-06"
    },
    {
      "name": "Sunil Kumar Dutta",
      "phone": 9734626440,
      "date": "2022-12-06"
    },
    {
      "name": "Nitesh Saraogi",
      "phone": 9830265946,
      "date": "2022-12-06"
    },
    {
      "name": "SANJUKTA DAS",
      "phone": 9002202499,
      "date": "2022-12-06"
    },
    {
      "name": "Yashik",
      "phone": 9625057475,
      "date": "2022-12-07"
    },
    {
      "name": "Amit Sharma",
      "phone": 9992311199,
      "date": "2022-12-07"
    },
    {
      "name": "Rajesh Hegde",
      "phone": 9845088095,
      "date": "2022-12-07"
    },
    {
      "name": "Vishal khanna",
      "phone": 9953012248,
      "date": "2022-12-07"
    },
    {
      "name": "Manish Sharma",
      "phone": 7006062077,
      "date": "2022-12-07"
    },
    {
      "name": "AAHANA BANSAL",
      "phone": 7589806558,
      "date": "2022-12-08"
    },
    {
      "name": "Ajmera Anudeep",
      "phone": 8185022797,
      "date": "2022-12-08"
    },
    {
      "name": "MD ARMAN",
      "phone": 8100510100,
      "date": "2022-12-08"
    },
    {
      "name": "Santosh singh",
      "phone": 7978301410,
      "date": "2022-12-08"
    },
    {
      "name": "Shubham Sharma",
      "phone": 7017647502,
      "date": "2022-12-08"
    },
    {
      "name": "Ankit Rahul",
      "phone": 7989087481,
      "date": "2022-12-08"
    },
    {
      "name": "Mohit Ahuja",
      "phone": 8668593554,
      "date": "2022-12-08"
    },
    {
      "name": "DILWAR HUSSAIN",
      "phone": 7002179865,
      "date": "2022-12-08"
    },
    {
      "name": "Priyanka Toshniwal",
      "phone": 8385969304,
      "date": "2022-12-08"
    },
    {
      "name": "Shalini Antwal",
      "phone": 7988551390,
      "date": "2022-12-08"
    },
    {
      "name": "Neha",
      "phone": 9354574276,
      "date": "2022-12-09"
    },
    {
      "name": "Priya pusp",
      "phone": 9811616026,
      "date": "2022-12-09"
    },
    {
      "name": "PABITRA MONDAL",
      "phone": 7407311734,
      "date": "2022-12-09"
    },
    {
      "name": "Tamilarasu",
      "phone": 9444192038,
      "date": "2022-12-09"
    },
    {
      "name": "Arwa Hirani",
      "phone": 9766890352,
      "date": "2022-12-09"
    },
    {
      "name": "Shashi B Singh",
      "phone": 9523197077,
      "date": "2022-12-09"
    },
    {
      "name": "GANESAN",
      "phone": 7200728664,
      "date": "2022-12-09"
    },
    {
      "name": "Aman",
      "phone": 8791559448,
      "date": "2022-12-09"
    },
    {
      "name": "Shashank Dhargalkar",
      "phone": 8446599232,
      "date": "2022-12-09"
    },
    {
      "name": "Montu jain",
      "phone": 8112265512,
      "date": "2022-12-09"
    },
    {
      "name": "Salman Hundekari",
      "phone": 8483007868,
      "date": "2022-12-10"
    },
    {
      "name": "Naveed ahmed",
      "phone": 6302583517,
      "date": "2022-12-10"
    },
    {
      "name": "Rashed jameel ahmed",
      "phone": 9912434060,
      "date": "2022-12-10"
    },
    {
      "name": "Mufeez ahmed",
      "phone": 8686722804,
      "date": "2022-12-10"
    },
    {
      "name": "Safoora fatima",
      "phone": 9491331296,
      "date": "2022-12-10"
    },
    {
      "name": "Taufeeq ahmed",
      "phone": 7288840613,
      "date": "2022-12-10"
    },
    {
      "name": "Zayeem ahmed",
      "phone": 6302187579,
      "date": "2022-12-10"
    },
    {
      "name": "Aneequa fatima",
      "phone": 9703588449,
      "date": "2022-12-10"
    },
    {
      "name": "Shaista tazeen",
      "phone": 9493664376,
      "date": "2022-12-10"
    },
    {
      "name": "Baleegh ahmed",
      "phone": 9885073875,
      "date": "2022-12-10"
    },
    {
      "name": "Nithish",
      "phone": 6309381998,
      "date": "2022-12-11"
    },
    {
      "name": "Talmeez ahmed",
      "phone": 7075059545,
      "date": "2022-12-11"
    },
    {
      "name": "Zeeshan fatima",
      "phone": 9398794221,
      "date": "2022-12-11"
    },
    {
      "name": "SUNITA KUMARI",
      "phone": 7488873429,
      "date": "2022-12-11"
    },
    {
      "name": "Jyoti M Bhatt",
      "phone": 7021345294,
      "date": "2022-12-11"
    },
    {
      "name": "omar mukthar",
      "phone": 9400956998,
      "date": "2022-12-11"
    },
    {
      "name": "Soumadip Moitra",
      "phone": 9903731422,
      "date": "2022-12-11"
    },
    {
      "name": "Akash Sharma",
      "phone": 8269345315,
      "date": "2022-12-11"
    },
    {
      "name": "Jayant goyal",
      "phone": 9728111917,
      "date": "2022-12-11"
    },
    {
      "name": "Sarvagya Jain",
      "phone": 7987309274,
      "date": "2022-12-11"
    },				
    {
      "name": "Aryan Raj",
      "phone": 8287557670,
      "date": "2022-12-12"
    },
    {
      "name": "EVEWIN CHRISTON LAKRA",
      "phone": 9934117944,
      "date": "2022-12-12"
    },
    {
      "name": "Harsh Doshi",
      "phone": 7227087015,
      "date": "2022-12-12"
    },
    {
      "name": "Ritika",
      "phone": 8750841230,
      "date": "2022-12-12"
    },
    {
      "name": "Vignesh",
      "phone": 9840484613,
      "date": "2022-12-12"
    },
    {
      "name": "Adepu Parameshwar",
      "phone": 8985453587,
      "date": "2022-12-12"
    },
    {
      "name": "mohdtofeeq",
      "phone": 6398267916,
      "date": "2022-12-12"
    },
    {
      "name": "Himanshu",
      "phone": 8278276235,
      "date": "2022-12-12"
    },
    {
      "name": "Nitu naresh",
      "phone": 8740866548,
      "date": "2022-12-12"
    },
    {
      "name": "Santosh Sharma",
      "phone": 9518074649,
      "date": "2022-12-12"
    },
    {
      "name": "Sommy",
      "phone": 8766330651,
      "date": "2022-12-13"
    },
    {
      "name": "Bharat",
      "phone": 8278539458,
      "date": "2022-12-13"
    },
    {
      "name": "Adrita Hassan",
      "phone": 9354816515,
      "date": "2022-12-13"
    },
    {
      "name": "Alamgir mondal",
      "phone": 9874320385,
      "date": "2022-12-13"
    },
    {
      "name": "RAHUL KUMBHAR",
      "phone": 8087247258,
      "date": "2022-12-13"
    },
    {
      "name": "Soumen Roy",
      "phone": 7003342132,
      "date": "2022-12-13"
    },
    {
      "name": "Vishal Bhansali",
      "phone": 9920909532,
      "date": "2022-12-13"
    },
    {
      "name": "Suyash Parakh",
      "phone": 7999786936,
      "date": "2022-12-13"
    },
    {
      "name": "Rma kumari",
      "phone": 8708369332,
      "date": "2022-12-13"
    },
    {
      "name": "Varma Prashant Kumar",
      "phone": 9510958646,
      "date": "2022-12-13"
    },



  ]

  fifaHighlights = [
    {
      image: 'assets/fifa_highlights/highlights_01.webp',
      text: 'France v Australia | Group D | FIFA World Cup Qatar 2022™',
      link: 'https://www.fifa.com/fifaplus/en/watch/SRVD2OnUQYrQ2X9VLnGDF'
    },
    {
      image: 'assets/fifa_highlights/highlights_02.webp',
      text: 'Mexico v Poland | Group C | FIFA World Cup Qatar 2022™',
      link: 'https://www.fifa.com/fifaplus/en/watch/160mKwOWPi2Mlp3GrpczZu'
    },
    {
      image: 'assets/fifa_highlights/highlights_03.webp',
      text: 'Denmark v Tunisia | Group D | FIFA World Cup Qatar 2022™',
      link: 'https://www.fifa.com/fifaplus/en/watch/3UG46kL82RDWDgxzt3QPjM'
    },
    {
      image: 'assets/fifa_highlights/highlights_04.webp',
      text: 'Argentina v Saudi Arabia | Group C | FIFA World Cup Qatar 2022™',
      link: 'https://www.fifa.com/fifaplus/en/watch/43Do27Etp3IapH0xwzbXOg'
    },
    {
      image: 'assets/fifa_highlights/highlights_1.webp',
      text: 'USA v Wales | Group B | FIFA World Cup Qatar 2022™',
      link: 'https://www.fifa.com/fifaplus/en/watch/6rnLprZqfXGriMwByd6wt8'
    },
    {
      image: 'assets/fifa_highlights/highlights_2.webp',
      text: 'Senegal v Netherlands | Group A | FIFA World Cup Qatar 2022™',
      link: 'https://www.fifa.com/fifaplus/en/watch/3GDVIQobvl9FaFY6w74WZ3'
    },
    {
      image: 'assets/fifa_highlights/highlights_3.webp',
      text: 'England v IR Iran | Group B | FIFA World Cup Qatar 2022™',
      link: 'https://www.fifa.com/fifaplus/en/watch/39GjJjsq75cbbXY0JMADYV'
    },
    {
      image: 'assets/fifa_highlights/highlights_4.webp',
      text: 'Qatar v Ecuador | Group A | FIFA World Cup Qatar 2022™',
      link: 'https://www.fifa.com/fifaplus/en/watch/2CKN465NbbTuFcXLb6sSeQ'
    },
  ]

  spotHisenseRegistrations: any = [];

  groups = [
    {
      heading: 'Group A',
      data: [
        {
          name: 'Qatar',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/QAT?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Ecuador',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ECU?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Senegal',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SEN?tx=c_fill,g_auto,q_auto'
        },
        {
          name: 'Netherlands',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/NED?tx=c_fill,g_auto,q_auto'
        }
      ]
    },
    {
      heading: 'Group B',
      data: [
        {
          name: 'England',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ENG?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'IR Iran',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/IRN?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'USA',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto'
        },
        {
          name: 'Wales',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/WAL?tx=c_fill,g_auto,q_auto'
        }
      ]
    },
    {
      heading: 'Group C',
      data: [
        {
          name: 'Argentina',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ARG?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Saudi Arabia',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/KSA?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Mexico',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/MEX?tx=c_fill,g_auto,q_auto'
        },
        {
          name: 'Poland',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/POL?tx=c_fill,g_auto,q_auto'
        }
      ]
    },
    {
      heading: 'Group D',
      data: [
        {
          name: 'France',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/FRA?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Denmark',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/DEN?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Tunisia',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/TUN?tx=c_fill,g_auto,q_auto'
        },
        {
          name: 'Australia',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/AUS?tx=c_fill,g_auto,q_auto'
        }
      ]
    },
    {
      heading: 'Group E',
      data: [
        {
          name: 'Spain',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ESP?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Germany',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/GER?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Japan',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/JPN?tx=c_fill,g_auto,q_auto'
        },
        {
          name: 'Costa Rica',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CRC?tx=c_fill,g_auto,q_auto'
        }
      ]
    },
    {
      heading: 'Group F',
      data: [
        {
          name: 'Belgium',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/BEL?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Canada',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CAN?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Morocco',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/MAR?tx=c_fill,g_auto,q_auto'
        },
        {
          name: 'Croatia',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CRO?tx=c_fill,g_auto,q_auto'
        }
      ]
    },
    {
      heading: 'Group G',
      data: [
        {
          name: 'Brazil',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/BRA?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Serbia',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SRB?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Switzerland',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SUI?tx=c_fill,g_auto,q_auto'
        },
        {
          name: 'Cameroon',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CMR?tx=c_fill,g_auto,q_auto'
        }
      ]
    },
    {
      heading: 'Group H',
      data: [
        {
          name: 'Portugal',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/POR?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Ghana',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/GHA?tx=c_fill,g_auto,q_auto',
        },
        {
          name: 'Uruguay',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/URU?tx=c_fill,g_auto,q_auto'
        },
        {
          name: 'Korea Republic',
          flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/KOR?tx=c_fill,g_auto,q_auto'
        }
      ]
    },
  ]

  environment = environment

  yesterdayDate: any;


  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private state: GlobalStateService,
    private api: ApiService,
    private title: Title) {
    this.state.mobileNavToggle.next(false);
    const date = new Date();
    // this.yesterdayDate = `${date.getFullYear()}-${(String(date.getMonth() + 1)).padStart(2, '0')}-${(String(date.getDate() - 1)).padStart(2, '0')}`;
    // console.log(this.yesterdayDate);
    this.title.setTitle('Hisense India | FIFA 2022');
    this.yesterdayDate = '2022-10-25';
  }

  swiper: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.swiper = new Swiper(".mySwiperHome", {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // autoplay: {
        //   delay: 6000,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      this.swiper.on('slideChange', (event: any) => {
        // if (event.activeIndex % 2 == 1) {
        //   this.currentTab = this.tabs[0];
        // } else {
        //   this.currentTab = this.tabs[1];
        // }
        let activeIndex = event.activeIndex;
        if (activeIndex == 4) {
          activeIndex = 1;
        }
        if (activeIndex == 0) {
          activeIndex = 3;
        }
        this.currentTab = this.tabs[activeIndex - 1];
      });
    })
    this.getRegistrations({ target: { value: this.yesterdayDate } });
    this.getRegistrationsOfSpotHisense({ target: { value: '2022-11-21' } });
  }

  ngAfterViewInit() {
    // if (isPlatformBrowser(this.platformId)) {
    //   // Set the date we're counting down to
    //   let countDownDate = new Date("Nov 20, 2022 16:00:00").getTime();

    //   // Update the count down every 1 second
    //   this.x = setInterval(() => {

    //     // Get today's date and time
    //     let now = new Date().getTime();

    //     // Find the distance between now and the count down date
    //     let distance = countDownDate - now;

    //     // Time calculations for days, hours, minutes and seconds
    //     const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    //     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //     if (this.days !== days) {
    //       this.days = days;
    //     }
    //     if (this.hours !== hours) {
    //       this.hours = hours;
    //     }
    //     if (this.minutes !== minutes) {
    //       this.minutes = minutes;
    //     }
    //     if (this.seconds !== seconds) {
    //       this.seconds = seconds;
    //     }

    //     // Output the result in an element with id="demo"
    //     // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //     //   + minutes + "m " + seconds + "s ";

    //     // If the count down is over, write some text 
    //     if (distance < 0) {
    //       clearInterval(this.x);
    //       // document.getElementById("demo").innerHTML = "EXPIRED";
    //     }
    //   }, 1000);
    // }
  }

  registrations: any;

  getRegistrations(event: any) {
    const params = {
      date: event.target.value,
      user_progress: 'prize_winners'
    };

    this.api.getRegistrations(params).subscribe((data: any) => {
      console.log(data);
      if (data.data.length) {
        this.registrations = data.data;
      } else {
        this.registrations = [];
      }
    }, (err) => {
      console.log(err);
    })
  }

  getRegistrationsOfSpotHisense(event: any) {
    this.spotHisenseRegistrations = this.spotHisenseRegistrationsDB.filter((obj: any) => obj.date == event.target.value);
  }

  changeTab(tab: any) {
    if (tab != "Highlights") {
      this.currentTab = tab;
      const tabIndec = this.tabs.findIndex(t => t == tab);
      this.swiper.slideTo(tabIndec + 1);
    } else {
      this.currentTab = this.tabs[0];
      setTimeout(() => {
        this.HighlightsRef.nativeElement.scrollIntoView({ behavior: "smooth" });
      })
    }
    // if (tab == this.tabs[0]) {
    //   this.swiper.slidePrev();
    // } else {
    //   this.swiper.slideNext();
    // }
  }

  ngOnDestroy() {
    if (this.x) {
      clearInterval(this.x);
    }
  }

}
