import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    @Input() top = false;
    newsSubDropdownToggle = false;
    aboutUsSubDropdownToggle = false;
    aboutSubDropDownToggle = false;
    newLaunchesDropDownToggle = false;

    newsSubLinks = [
        {
            image: 'assets/images/tv.png',
            text: 'Press Coverages',
            url: '/press-coverages'
        },
        {
            image: 'assets/images/tv.png',
            text: 'Tech Testimonials',
            url: '/tech-testimonials'
        },
        // {
        //     image: 'assets/images/tv.png',
        //     text: 'Offers/Promotions',
        //     url: '/offers-promotions/'
        // },
    ]

    aboutUsSubLinks = [
        {
            image: 'assets/images/tv.png',
            text: 'Overview',
            url: '/about-hisense/overview'
        },
        {
            image: 'assets/images/tv.png',
            text: 'Values',
            url: '/about-hisense/values'
        },
        {
            image: 'assets/images/tv.png',
            text: 'CSR',
            url: '/about-hisense/csr'
        },
        {
            image: 'assets/images/tv.png',
            text: 'Technology',
            url: '/about-hisense/technology'
        },
        {
            image: 'assets/images/tv.png',
            text: 'Newsroom',
            url: '/about-hisense/newsroom'
        },
        {
            image: 'assets/images/tv.png',
            text: 'Tech Testimonials',
            url: '/about-hisense/tech-testimonials'
        },
    ]

    aboutSubLinks = [
        {
            text: 'Mission',
            url: '/about-us',
            fragment: '#mission'
        },
    ]

    delightFulFlagPath = `${environment.baseApiUrl}/media/pages/campaigns/delightful-india/flag-logo.png`


    flagLogo = environment.baseApiUrl + "/media/pages/campaigns/delightful-india/flag-logo.png"

    navLinks: any = []
    isHomePage: any;

    constructor(private state: GlobalStateService,
        @Inject(PLATFORM_ID) private platformId: Object,
        private router: Router,
        private api: ApiService) {
        this.subscribeToSidebarNavigation();
        this.api.getHeaderItems().subscribe((res: any) => {
            this.api.headerItems.next(res.data);
            this.navLinks = res.data.map((obj: any) => {
                return {
                    ...obj,
                    "sub-menu": obj['sub-menu'].map((obj1: any) => {
                        return {
                            ...obj1,
                            "image": obj1.thumb_image_small
                        }
                    })
                }
            })
        }, (err) => {
            console.log(err);
        })
    }

    ngOnInit(): void {
        this.isHomePage = this.router.url;
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                // console.log(event.url);
                this.isHomePage = event.url;
            }
        });
    }

    // toggleNavItemsDisplay(){
    //   if(!this.isNavItemsToggleDisabled){
    //     this.isNavItemsToggleDisabled = true;
    //     this.showNavItemsInSmallScreens = !this.showNavItemsInSmallScreens;
    //     this.displayChildItemsOfIndex = null
    //     setTimeout(()=>{
    //       this.isNavItemsToggleDisabled = false;
    //     },300)
    //   }
    // }

    // displayProductsOfCategory(i: number,navLinks: any){
    //   if(navLinks.childLinks){
    //     this.currentChildLinksContext = navLinks;
    //     this.displayChildItemsOfIndex = i
    //   }
    // }

    // @ViewChild('navToggle') navToggleBtn!: HTMLElement;
    // a = false;
    // ngAfterViewInit(){
    // console.log(this.navToggleBtn);
    // }

    mobileNavToggle: boolean = false;
    // subDropdownToggle = false;

    subscribeToSidebarNavigation() {
        this.state.mobileNavToggle.subscribe(val => {
            this.mobileNavToggle = val;
            for (let obj of this.navLinks) {
                obj.subDropdownToggle = false;
            }
            this.newsSubDropdownToggle = false;
            this.aboutUsSubDropdownToggle = false;
        });
    }

    @ViewChild('header') header: any;

    headerHidden = false;

    // @HostListener('window:scroll', ['$event'])
    // onscroll(e: any) {
    //   // your code here
    //   // console.log(e.target.documentElement.scrollTop);
    //   // if(e.target.documentElement.scrollTop > 200 && !this.header.nativeElement.classList.contains('hide__header')){
    //   //   this.hideHeader();
    //   // }else{
    //   //   this.header.nativeElement.classList.remove('hide__header');
    //   // }

    //   if (e.target.documentElement.scrollTop > 200) {
    //     if (!this.header.nativeElement.classList.contains('hide__header')) {
    //       this.hideHeader();
    //       this.headerHidden = true;
    //     }
    //   } else {
    //     this.headerHidden = false;
    //     if(this.top){
    //       this.header.nativeElement.classList.remove('hide__header","top45');
    //     }
    //   }
    // }

    // hideHeader() {
    //   console.log(this.header)
    //   if(this.top){
    //     this.header.nativeElement.classList.add('hide__header top45');
    //   }else{
    //     this.header.nativeElement.classList.add('hide__header');

    //   }
    // }

    // scrollTop(){
    //   if (isPlatformBrowser(this.platformId)) {
    //       window.scrollTo({top: 0, behavior: 'smooth'});
    //   }
    // }

}
