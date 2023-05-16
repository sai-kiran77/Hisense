import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offers-promotions',
  templateUrl: './offers-promotions.component.html',
  styleUrls: ['./offers-promotions.component.scss']
})
export class OffersPromotionsComponent implements OnInit {

  sampleResponse = {
    "status": "ok",
    "message": "Warranty information list loaded",
    "data": [
      {
        "id": 8,
        "code": "uhd-tv",
        "name": "UHD TV",
        "display_value": "UHD TV",
        "products": [
          {
            "id": 8,
            "code": "32E4G",
            "name": "Hisense Android Smart TV",
            "display_value": "Hisense Android Smart TV",
            "product_variants": [
              {
                "id": 88,
                "code": "32E4G64",
                "name": "Product variant name",
                "display_value": "Product variant display name",
                "years_of_purchase": [
                  {
                    "year": 2020,
                    "display_value": "2020",
                    "months_of_purchase": [
                      {
                        "month": "January",
                        "display_value": "January",
                        "warranty_information": {
                          "id": 88,
                          "warranty_description_array": [],
                          "warranty_description_text": "1.5 years  of warranty",
                          "warranty_duration_years": "1",
                          "warranty_duration_months": "6",
                          "warranty_duration_years_string": "1 year 6 months",
                          "warranty_duration_start_date": "01-01-2020",
                          "warranty_duration_end_date": "31-12-2021",
                          "warranty_duration_date_string": "Jan'20 till Dec'21",
                        }
                      },
                      {
                        "month": "April",
                        "display_value": "April",
                        "warranty_information": {
                          "id": 88,
                          "warranty_description_array": [],
                          "warranty_description_text": "1.5 years  of warranty",
                          "warranty_duration_years": "1",
                          "warranty_duration_months": "6",
                          "warranty_duration_years_string": "1 year 6 months",
                          "warranty_duration_start_date": "01-01-2020",
                          "warranty_duration_end_date": "31-12-2021",
                          "warranty_duration_date_string": "Jan'20 till Dec'21",
                        }
                      },
                      {
                        "month": "July",
                        "display_value": "July",
                        "warranty_information": {
                          "id": 88,
                          "warranty_description_array": [],
                          "warranty_description_text": "1.5 years  of warranty",
                          "warranty_duration_years": "1",
                          "warranty_duration_months": "6",
                          "warranty_duration_years_string": "1 year 6 months",
                          "warranty_duration_start_date": "01-01-2020",
                          "warranty_duration_end_date": "31-12-2021",
                          "warranty_duration_date_string": "Jan'20 till Dec'21",
                        }
                      }
                    ]
                  },
                  {
                    "year": 2018,
                    "display_value": "2018",
                    "months_of_purchase": [
                      {
                        "month": "February",
                        "display_value": "February",
                        "warranty_information": {
                          "id": 88,
                          "warranty_description_array": [],
                          "warranty_description_text": "1.5 years of warranty",
                          "warranty_duration_years": "1",
                          "warranty_duration_months": "6",
                          "warranty_duration_years_string": "1 year 6 months",
                          "warranty_duration_start_date": "01-01-2020",
                          "warranty_duration_end_date": "31-12-2021",
                          "warranty_duration_date_string": "Jan'20 till Dec'21",
                        }
                      },
                      {
                        "month": "May",
                        "display_value": "May",
                        "warranty_information": {
                          "id": 88,
                          "warranty_description_array": [],
                          "warranty_description_text": "1.5 years of warranty",
                          "warranty_duration_years": "1",
                          "warranty_duration_months": "6",
                          "warranty_duration_years_string": "1 year 6 months",
                          "warranty_duration_start_date": "01-01-2020",
                          "warranty_duration_end_date": "31-12-2021",
                          "warranty_duration_date_string": "Jan'20 till Dec'21",
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": 44,
                "code": "32E4G44",
                "name": "Product variant name 2",
                "display_value": "Product variant display name 2",
                "years_of_purchase": [
                  {
                    "year": 2019,
                    "display_value": "2019",
                    "months_of_purchase": [
                      {
                        "month": "February",
                        "display_value": "February",
                        "warranty_information": {
                          "id": 88,
                          "warranty_description_array": [],
                          "warranty_description_text": "1.5 years  of warranty",
                          "warranty_duration_years": "1",
                          "warranty_duration_months": "6",
                          "warranty_duration_years_string": "1 year 6 months",
                          "warranty_duration_start_date": "01-01-2020",
                          "warranty_duration_end_date": "31-12-2021",
                          "warranty_duration_date_string": "Jan'20 till Dec'21",
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

  selectedCat: any = null;
  productVarients: any = [];
  selectedProd: any = null;
  updateCategory(event: any) {
    this.productVarients = [];
    this.sampleResponse.data.find((obj)=>obj.id == event.target.value)?.products.forEach((object)=>{
      object.product_variants.forEach((o)=>{
        this.productVarients.push(o);
      })
    });
  }

  updateProduct(event: any) {
    // this.selectedProd = this.selectedCat?.products?.find((obj: any)=>obj.id == event.target.value).;
    this.selectedProd = this.productVarients.find((obj: any)=>obj.id == event.target.value);
  }

  selectedYear: any;
  updateYear(event: any) {
    this.selectedYear = this.selectedProd.years_of_purchase.find((obj: any)=>obj.year == event.target.value);
  }
  warranty: any;
  updateMonth(event: any) {
    this.warranty = this.selectedYear.months_of_purchase.find((obj: any)=>obj.month == event.target.value);
    console.log(this.warranty);
  }


  readMore = false;

  metaData: any = [];
  isImageLoading = true;
  tabs = ["Air Conditioner", 'Television'];
  currentMainTab = "Air Conditioner";

  changeMainTab(tab: any) {
    this.currentMainTab = tab;
  }

  ACSectionLeftTabs = ['Inverter expert', 'Intelligent inverter', 'Intellipro and cooling xpert'];
  currentAcSectionTab = 'Inverter expert';

  changeTab(obj: any) {
    if (this.currentImg != obj.image_full_url) {
      this.isImageLoading = true;
      this.currentImg = obj.image_full_url;
      this.currentTab = obj.start_date_formatted;
    }
  }

  constructor(private state: GlobalStateService,
    private api: ApiService,
    private title: Title) {
    this.state.mobileNavToggle.next(false);
    this.title.setTitle('Hisense India | Warranty Information');
  }

  currentImg: any;
  //  = "https://www.partrunner.com/en/assets/images/banner_image-1200x724.png";
  currentTab: any;

  ngOnInit(): void {
    this.getSlides();
    // this.getTermsAndConditions();
  }


  getSlides() {
    this.api.getPageSlides({ pageUrl: '/offers-promotions' }).subscribe({
      next: (res: any) => {
        console.log(res);
        this.metaData = res.data.offers_promotions;
        this.currentImg = this.metaData[0].image_full_url;
        this.currentTab = this.metaData[0].start_date_formatted;
      },
      error: (err) => {
      }
    });
  }

  imageLoaded() {
    this.isImageLoading = false;
  }

  // ACTermsMetaData:any;

  // getTermsAndConditions() {
  //   this.api.getPageSlides({ pageUrl: '/terms-and-conditions' }).subscribe({
  //     next: ({data}: any) => {
  //       this.ACTermsMetaData = data.terms_and_conditions.filter((obj: any)=>obj.id == 2)?.[0];
  //       if(this.ACTermsMetaData){
  //         // this.metaData = res.data.terms_and_conditions;
  //         // this.currentTab = this.metaData[0].tab_name;
  //         this.ACSectionLeftTabs.unshift("Air Conditioner T & C");
  //         this.currentAcSectionTab = "Air Conditioner T & C";
  //       };
  //     },
  //     error: (err) => {
  //     }
  //   });
  // }

}
