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
    public sanitizer: DomSanitizer,) {
    this.state.mobileNavToggle.next(false);

  }

  ngOnInit(): void {
    // does not render when there is a update in params
    // const category = this.route.snapshot.paramMap.get('category');
    // console.log(category);

    //renders when there is a update in params
    this.route.params.pipe(takeWhile(_ => this.alive)).subscribe(routeParams => {
      this.state.mobileNavToggle.next(false);
      this.show404 = false;
      this.loadMetaData(routeParams['category']);
    });

    // this.route.fragment.pipe(takeWhile(_=>this.alive)).subscribe((fragment) => {
    //   // console.log("My hash fragment is here => ", fragment);
    //   this.state.mobileNavToggle.next(false);
    //   this.fragment = fragment;
    // })

  }

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
