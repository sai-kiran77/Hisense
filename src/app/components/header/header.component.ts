import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  navLinks = {
    LeftNavLinks: [
      {
        name: 'TV & Audio',
        childLinks: [
          {
            name: 'TV',
            imgURL: 'https://global.hisense.com/dam/jcr:61dd8d05-6e50-44f1-adf0-579fb08af0e9/tv.png'
          },
          {
            name: 'soundbar',
            imgURL: 'https://global.hisense.com/dam/jcr:e1e2e3a2-1778-47d0-8f67-c5997a722fd6/soundbar.png'
          },

        ]
      },
      {
        name: 'Laser TV',
        childLinks: [
          {
            name: 'Laser TV',
            imgURL: 'https://global.hisense.com/dam/jcr:1179193d-e878-4ac9-b215-ef0c25a99a2a/laser-tv.png'
          },
          {
            name: 'Laser Cinema',
            imgURL: 'https://global.hisense.com/dam/jcr:9835ad2f-426e-477d-8270-3ac42df1f47c/laser-cinema.png'
          },

        ]
      },
      {
        name: 'Home Appliances',
        childLinks: [
          {
            name: 'Refrigerator',
            imgURL: 'https://global.hisense.com/dam/jcr:7886f269-a9f1-4b56-b2ed-45e19e5b07db/refrigerator.png'
          },
          {
            name: 'Laundry',
            imgURL: 'https://global.hisense.com/dam/jcr:4fa81e38-fef5-4ea9-b2c1-24a7b4d5a95a/laundry.png'
          },
          {
            name: 'Dishwasher',
            imgURL: 'https://global.hisense.com/dam/jcr:d3648e11-4a29-4738-9306-0a6d0a30be8c/dishwasher.png'
          },
          {
            name: 'Oven',
            imgURL: 'https://global.hisense.com/dam/jcr:c56defb0-5529-4fea-9ed7-8e82e46ef30e/oven.png'
          },
          {
            name: 'Hob',
            imgURL: 'https://global.hisense.com/dam/jcr:2fcc5d8f-5dc4-4c9a-af15-74bf8a608c3f/hob.png'
          },
        ]
      },
      {
        name: 'Mobile',
        childLinks: [
          {
            name: 'Smartphone',
            imgURL: 'https://global.hisense.com/dam/jcr:d8ddeb62-5f35-40c3-8d4e-19237b87e6df/smartphone.png'
          }
        ]
      },
      {
        name: 'B2B',
        childLinks: [
          {
            name: 'Commercial Display',
            imgURL: 'https://global.hisense.com/dam/jcr:3f55fff3-c486-4e6e-a221-4c3300fba892/hisense-commercial-display.png'
          }
        ]
      }
    ],
    RightNavLinks: [
      {
        name: 'About Hisense',
        redirectURL: 'https://global.hisense.com/about-hisense/overview/'
      },
      {
        name: 'Support',
        childLinks: [
          {
            name: 'Support',
            imgURL: 'https://global.hisense.com/dam/jcr:578a7967-a4c6-4a15-acc0-fae403c10ab6/icon-certificate-download.svg'
          },
          {
            name: 'Contact Us',
            imgURL: 'https://global.hisense.com/dam/jcr:25184725-7819-45d3-9be7-f62c97e72283/icon-contact-us.svg'
          },
          {
            name: 'Customer Center',
            imgURL: 'https://global.hisense.com/dam/jcr:b3ffcace-0cc8-4dac-8cb0-dd9f21630be5/icon-customer-center.svg'
          }
        ]
      },

    ]
  }

  // showNavItemsInSmallScreens = false;
  // isNavItemsToggleDisabled = false;
  // displayChildItemsOfIndex: number | null = null;
  // currentChildLinksContext = null;

  // rightNavLinks = [
  //   {
  //     name: 'About Hisense'
  //   },
  //   {
  //     name: 'Support'
  //   }
  // ]

  constructor(private state: GlobalStateService,
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.subscribeToSidebarNavigation();
  }

  ngOnInit(): void { }

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
  subDropdownToggle = false;

  subscribeToSidebarNavigation() {
    this.state.mobileNavToggle.subscribe(val => {
      this.mobileNavToggle = val;
      console.log(val);
      this.subDropdownToggle = false;
    });
  }

  @ViewChild('header') header: any;

  headerHidden = false;

  @HostListener('window:scroll', ['$event'])
  onscroll(e: any) {
    // your code here
    // console.log(e.target.documentElement.scrollTop);
    // if(e.target.documentElement.scrollTop > 200 && !this.header.nativeElement.classList.contains('hide__header')){
    //   this.hideHeader();
    // }else{
    //   this.header.nativeElement.classList.remove('hide__header');
    // }

    if (e.target.documentElement.scrollTop > 200) {
      if (!this.header.nativeElement.classList.contains('hide__header')) {
        this.hideHeader();
        this.headerHidden = true;
      }
    } else {
      this.headerHidden = false;
      this.header.nativeElement.classList.remove('hide__header');
    }
  }

  hideHeader() {
    console.log(this.header)
    this.header.nativeElement.classList.add('hide__header');
  }

  scrollTop(){
    if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

}
