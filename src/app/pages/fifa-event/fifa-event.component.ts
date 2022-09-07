import { Component, OnInit } from '@angular/core';
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

  environment = environment

  fifaDetails = {
    "desktop_image": "slide-1-300822.webp",
    "mobile_image": "slide-1-300822-mobile.webp",
    "desktop_image_full_url": `${environment.baseApiUrl}/media/pages/campaigns/fifa-2022/FIFA-World-Cup-Banner-Desktop.webp`,
    "mobile_image_full_url": `${environment.baseApiUrl}/media/pages/campaigns/fifa-2022/FIFA-World-Cup-Banner-Mobile.webp`
  }

  constructor() {
    console.log('from fifa');
  }

  ngOnInit(): void {
    // Set the date we're counting down to
    let countDownDate = new Date("Sep 15, 2022 00:00:00").getTime();

    // Update the count down every 1 second
    let x = setInterval(() => {

      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      //   + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        // document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

}
