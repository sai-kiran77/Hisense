import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hisense';

  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,) {
  }
  ngOnInit() {
    // console.log(this.router.url);
    if (isPlatformBrowser(this.platformId)) {
      console.log(window.location.pathname)
      switch (window.location.pathname) {
        case '/30-39':
          this.router.navigate(['/c/laser-tv']);
          break;
        case '/40-49':
        case '/50-59':
        case '/60-69':
        case '/70-above':
        case '/televisions':
          this.router.navigate(['/c/tv']);
          break;
        case '/ac/model-no-as-12tw4rmrka00':
        case '/ac/model-no-as-12tw4ryrka01b':
        case '/ac/model-no-as-18tw4rgska00':
        case '/ac/model-no-as-18tw4rxska00':
        case '/ac/model-no-as-22tr4rbbtv00':
        case '/air-conditioner':
          this.router.navigate(['/c/air-conditioner']);
          break;
        case '/convertible':
          this.router.navigate(['/c/convertible-health-series']);
          break;
        case '/dish-washer':
          this.router.navigate(['/c/dish-washer']);
          break;
        case '/festive':
          this.router.navigate(['/']);
          break;
        case '/free-standing-dish-washer':
          this.router.navigate(['/c/freestanding-dishwasher'])
          break;
        case '/french-door':
        case '/refrigerator/rq561n4asn':
        case '/refrigerator/r229d4asb2':
        case '/refrigerator/rs670n4asn':
        case '/refrigerator/rr120d4asb1':
        case '/refrigerator/rr60d4asb1':
        case '/refrigerator/rs826n4agn':
        case '/refrigerators':
        case '/side-by-side':
          this.router.navigate(['/c/refrigerator'])
          break;
        case '/laser-tv':
          this.router.navigate(['/c/laser-tv'])
          break;
        case '/pure-flat':
          this.router.navigate(['/c/pure-flat-refrigerators']);
          break;
        case '/qled':
          this.router.navigate(['/c/qled-tv']);
          break;
        case '/refrigerator/rq507n4sbvw':
          this.router.navigate(['/v/RQ507N4SBVW']);
          break;
        case '/refrigerator/rq507n4ssvw':
          this.router.navigate(['/v/RQ507N4SSVW']);
          break;
        case '/refrigerator/rq670n4sbu-bcd-560w':
          this.router.navigate(['/v/RQ670N4SBU']);
          break;
        case '/refrigerator/rs564n4sbn-bcd-518wo':
          this.router.navigate(['/v/RS564N4SBN'])
          break;
        case '/refrigerator/rs564n4ssn-518wc':
          this.router.navigate(['/v/RS564N4SSN']);
          break;
        case '/refrigerator/rt488n4asb2':
          this.router.navigate(['/v/RT488N4ASB2'])
          break;
        case '/simple-life-series':
          this.router.navigate(['/c/simple-life-series'])
          break;
        case '/single-door':
          this.router.navigate(['/c/mini-refrigerators'])
          break;
        case '/smart':
          this.router.navigate(['/c/smart-tv']);
          break;
        case '/television/120l9g':
          this.router.navigate(['/v/120L9G']);
          break;
        case '/television/32a4ge':
          this.router.navigate(['/v/32A4GE'])
          break;
        case '/television/32a56e':
          this.router.navigate(['/v/32A56E'])
          break;
        case '/television/32e4g':
          this.router.navigate(['/v/32E4G'])
          break;
        case '/television/40a56e':
          this.router.navigate(['/v/40A56E'])
          break;
        case '/television/43a4ge':
          this.router.navigate(['/v/43A4GE'])
          break;
        case '/television/43a56e':
          this.router.navigate(['/v/43A56E'])
          break;
        case '/television/43a6ge':
          this.router.navigate(['/v/43A6GE'])
          break;
        case '/television/43a71f':
          this.router.navigate(['/v/43A71F'])
          break;
        case '/television/43e4g':
          this.router.navigate(['/v/43E4G'])
          break;
        case '/television/50a6ge':
          this.router.navigate(['/v/50A6GE'])
          break;
        case '/television/50a71f':
          this.router.navigate(['/v/50A71F'])
          break;
        case '/television/50a73f':
          this.router.navigate(['/v/50A73F'])
          break;
        case '/television/55a71f':
          this.router.navigate([''])
          break;
        case '':
          this.router.navigate(['/v/55A71F'])
          break;
        case '/television/55a73f':
          this.router.navigate(['/v/55A73F'])
          break;
        case '/television/55u6g':
          this.router.navigate(['/v/55U6G'])
          break;
        case '/television/58a71f':
          this.router.navigate(['/v/58A71F'])
          break;
        case '/television/65a73f':
          this.router.navigate(['/v/65A73F'])
          break;
        case '/television/65u6g':
          this.router.navigate(['/v/65U6G'])
          break;
        case '/television/70a71f':
          this.router.navigate(['/v/70A71F'])
          break;
        case '/television/75u8g':
          this.router.navigate(['/v/75U80G'])
          break;
        case '/top-freezer':
          this.router.navigate(['/c/top-freezer-refrigerators'])
          break;
        case '/uhd':
          this.router.navigate(['/c/uhd-tv'])
          break;
        case '/washing-machine':
          this.router.navigate(['/c/washing-machine'])
          break;
      }
    }
  }
}
