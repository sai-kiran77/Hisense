import { Component, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  metaData: any;
  alive = true;
  show404 = false;
  // fragment: any = '';
  fallbackImg = 'https://www.hisense-india.com/wp-content/themes/hisense/images/tv/A6H.webp';
  purchaseLinks: any = [];
  showPurchaseLinksModal = false;
  isVideoLoading = true;

  constructor(private route: ActivatedRoute,
    private api: ApiService,
    private state: GlobalStateService,
    private title: Title,
    private meta: Meta,
    private router: Router,
    public sanitizer: DomSanitizer) {
    this.state.mobileNavToggle.next(false);

  }

  isSmartTvPage = false;

  isRefrigiratorPage = false;
  isACPage = false;

  ngOnInit(): void {
    // does not render when there is a update in params
    // const category = this.route.snapshot.paramMap.get('category');
    // console.log(category);

    //renders when there is a update in params
    this.route.params.pipe(takeWhile(_ => this.alive)).subscribe((routeParams: any) => {
      this.isSmartTvPage = routeParams.category == 'smart-tv-platform';
      this.state.mobileNavToggle.next(false);
      this.show404 = false;
      this.isACPage = false;
      this.isRefrigiratorPage = false;
      console.log(routeParams.category);
      if(
        routeParams.category == 'multi-door-refrigerators' ||
        routeParams.category == 'side-by-side-refrigerators' ||
        routeParams.category == 'single-door-refrigerator' ||
        routeParams.category == 'mini-refrigerators'
      ){
        this.isRefrigiratorPage = true;
      }

      if(
        routeParams.category == 'IntelliPRO-Series' ||
        routeParams.category == 'Cooling-Expert-Series' ||
        routeParams.category == 'convertible-health-series'
      ){
        this.isACPage = true;
      }
      this.loadMetaData(routeParams['category']);
    });

    // this.route.fragment.pipe(takeWhile(_=>this.alive)).subscribe((fragment) => {
    //   // console.log("My hash fragment is here => ", fragment);
    //   this.state.mobileNavToggle.next(false);
    //   this.fragment = fragment;
    // })

  }

  smartTvCards = [
    {
      heading: "Google TV",
      image: "assets/smart-tv/google-tv.webp",
      desc: "Thousands of streaming channels at your fingertips",
      link: "android",
      bg: "#B33846",
      htmlDesc: `<p>Puts your favourite content front and center. Where it's ready to watch or pick up where you left off. Stream more than 500,000 shows, movies and apps, as well as watch live sports and news. <br><br>With the Google Assistant built-in, you can turn on the lights, change the thermostat, add stuff to your grocery list, and control your TV with your voice. And with universal search, you can even get recommendations with Android TV.</p>`,
      htmlSecImage: `assets/smart-tv/google-tv.webp`,
      redirectLink: '/c/google-tv'
    },
    {
      heading: "VidAA",
      image: "assets/smart-tv/vidaa-tv.webp",
      desc: "The TV that's great for entertainment.",
      link: "fire",
      bg: "#d55933",
      htmlDesc: `<p>With Fire TV built-in, you can enjoy a world of entertainment from apps like Prime Video, Netflix, Disney+, Hulu, and HBO Max. Plus, stream for free with Pluto TV, &nbsp;Tubi, and more. The included Voice Remote with Alexa lets you use your voice to easily change channels, launch apps, search for titles, play music, and even control smart home devices. And you can personalize your family's viewing experience with up to six profiles, so everyone can have their own watch list, recommendations, and live TV preferences.&nbsp;</p>`,
      htmlDisclaimer: `<p><i style="font-size: 14px;">Required Disclaimer: Apps and services are subject to change or withdrawal at any time and may require separate subscriptions and compatible equipment (sold separately).</i></p>`,
      htmlSecImage: "assets/smart-tv/vidaa-tv.webp",
      redirectLink: '/c/vidaa-tv'
    },
    {
      heading: "Android TV",
      image: "assets/smart-tv/android-tv.webp",
      desc: "The TV that's great for everyone.",
      link: "google",
      bg: "#f3b602",
      htmlDesc: `<p>The entertainment you love. With a little help from Google. Google TV brings together movies, shows, live TV and more from across your apps and subscriptions and organizes them just for you. Discover new things to watch with recommendations based on what you watch and what interests you, from across your subscriptions and content available to you. Ask Google to find movies and shows, answer questions, control smart home devices, and more, with your voice. And with the Google TV app you can watch anywhere, anytime.</p>`,
      htmlSecImage: "assets/smart-tv/android-tv.webp",
      redirectLink: '/c/android-tv'
    },
  ];

  showVideo = false;

  loadMetaData(category: string) {
    this.showVideo = false;
    this.api.getSlugData(category).pipe(takeWhile(_ => this.alive)).subscribe({
      next: (res: any) => {
        // console.log(res);
        res.data.cover_media = res.data.cover_media.map((obj: any) => {
          return {
            ...obj,
            sanatized_url: this.getVideoLink(obj.full_url)
          }
        });
        res.data.category_products = res.data.category_products.map((obj: any, i: number) => {
          return {
            ...obj,
            currentIndex: 0
          }
        })
        // setTimeout(()=>{
          this.showVideo = true;
        // },100)
        this.metaData = res.data;
        // console.log(this.metaData)
        this.seoTags(res.data.seo_info);
        // if(this.fragment){
        //   location.hash = '';
        //   location.hash = "#" + this.fragment;
        // }
      },
      error: (e) => {
        console.log(e);
        // this.router.navigate(['404']);
        this.router.navigate(['']);
        // this.show404 = true;
      }
    })
  }

  seoTags(data: any) {
    this.title.setTitle(data.title);
    this.meta.updateTag({
      name: 'description',
      content: data.description
    })
    data.meta.forEach((obj: any) => {
      if (obj.attributes) {
        for (let key in obj.attributes) {
          this.meta.updateTag({
            property: key,
            content: obj.attributes[key]
          })
        }
      }
    })
  }

  getVideoLink(url: string) {
    url = url.split('?')[0] + '?autoplay=1&mute=0&showinfo=1&controls=1;';
    // console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  buyOptions(url: any) {
    this.api.getVarientData(url.slice(3)).subscribe({
      next: (res: any) => {
        // console.log(res?.data?.product_variant_purchase_links);
        this.purchaseLinks = res?.data?.product_variant_purchase_links;
        this.showPurchaseLinksModal = true;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getVendorImage(vendor: string) {
    switch (vendor) {
      case "amazon":
        return 'assets/amazon.png';
      case "flipkart":
        return 'assets/flipkart.png';
      // case "tata_cliq":
      //   return 'assets/tata-cliq.jpg';
      // case "jio_mart":
      //   return 'assets/jiomart.png';
      case "reliance_digital":
        return 'assets/reliance-digital.png';
      case "croma":
        return 'assets/croma.jpg';
      default:
        return '';
    }
  }

  loadedCount = 0;
  load() {
    // console.log('loaded');
    this.loadedCount++;
    if(this.loadedCount == 2){
      this.isVideoLoading = false;
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
