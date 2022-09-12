import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fifa-event',
  templateUrl: './fifa-event.component.html',
  styleUrls: ['./fifa-event.component.scss']
})
export class FifaEventComponent implements OnInit {

  days: any = '00';
  hours: any = '00';
  minutes: any = '00';
  seconds: any = '00';
  x: any;

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

  fifaDetails = {
    "desktop_image": "slide-1-300822.webp",
    "mobile_image": "slide-1-300822-mobile.webp",
    "desktop_image_full_url": `${environment.baseApiUrl}/media/pages/campaigns/fifa-2022/FIFA-World-Cup-Banner-Desktop.webp`,
    "mobile_image_full_url": `${environment.baseApiUrl}/media/pages/campaigns/fifa-2022/FIFA-World-Cup-Banner-Mobile.webp`
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Set the date we're counting down to
      let countDownDate = new Date("Nov 20, 2022 16:00:00").getTime();

      // Update the count down every 1 second
      this.x = setInterval(() => {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (this.days !== days) {
          this.days = days;
        }
        if (this.hours !== hours) {
          this.hours = hours;
        }
        if (this.minutes !== minutes) {
          this.minutes = minutes;
        }
        if (this.seconds !== seconds) {
          this.seconds = seconds;
        }

        // Output the result in an element with id="demo"
        // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        //   + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(this.x);
          // document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);
    }
  }

  // ngDoCheck() {
  //   console.log('chnage detected');
  // }

  ngOnDestroy() {
    if (this.x) {
      clearInterval(this.x);
    }
  }

}