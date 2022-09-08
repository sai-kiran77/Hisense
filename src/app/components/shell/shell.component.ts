import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  currentRoute: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    // console.log(this.currentRoute);

    this.router.events.subscribe((event) => {
      // if (event instanceof NavigationStart) {
      //     // Show loading indicator
      // }

      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        // console.log(this.currentRoute)
      }

      // if (event instanceof NavigationError) {
      //     // Hide loading indicator

      //     // Present error to user
      //     console.log(event.error);
      // }
    });
    if (this.currentRoute.includes('/press-coverages/page/')){
      this.router.navigate(['/press-coverages']);
    } else {
      this.redirect()
    }
  }

  redirect() {
    console.log(this.currentRoute);
  }

}
