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
  seconds: any;
  x: any;

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
      let countDownDate = new Date("Sep 15, 2022 00:00:00").getTime();

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
          console.log('days');
          this.days = days;
        }
        if (this.hours !== hours) {
          console.log('hours');
          this.hours = hours;
        }
        if (this.minutes !== minutes) {
          console.log('minutes');
          this.minutes = minutes;
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
