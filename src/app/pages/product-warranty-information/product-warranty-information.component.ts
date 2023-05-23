import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-product-warranty-information',
  templateUrl: './product-warranty-information.component.html',
  styleUrls: ['./product-warranty-information.component.scss']
})
export class ProductWarrantyInformationComponent implements OnInit {

  minYear = new Date().getFullYear() + 1;
  minYearCopy = this.minYear;
  maxYear = 1970;
  maxYearCopy = this.maxYear;

  monthMap = {
    '01': "January",
    '02': "February",
    '03': "March",
    '04': "April",
    '05': "May",
    '06': "June",
    '07': "July",
    '08': "August",
    '09': "September",
    '10': "October",
    '11': "November",
    '12': "December",
  }

  daysInMonthMap: any = {
    '01': "31",
    '02': "28",
    '03': "31",
    '04': "30",
    '05': "31",
    '06': "30",
    '07': "31",
    '08': "31",
    '09': "30",
    '10': "31",
    '11': "30",
    '12': "31",
  }
  dateSelected: any;
  changeDate(e: any){
    console.log(e.target.value);
    // 2023-05-10
    this.warranty = null;
    this.dateSelected = e.target.value;
    const [year,month,date] = e.target.value.split('-');
    this.updateYear(year);
    if(this.selectedYear){
      this.updateMonth(month);
    }
    
  }

  metaData: any = [];

  selectedCat: any = null;
  productVarients: any = [];
  selectedProd: any = null;
  selectedProdId: any = null;
  updateCategory(event: any) {
    this.warranty = null;
    this.selectedProd = null;
    this.selectedProdId = null;
    this.dateSelected = null;
    this.minYear = this.minYearCopy;
    this.maxYear = this.maxYearCopy;
    this.productVarients = [];
    this.metaData.find((obj: any)=>obj.id == event.target.value)?.products.forEach((object: any)=>{
      object.product_variants.forEach((o: any)=>{
        this.productVarients.push(o);
      })
    });
    console.log(this.productVarients);
  }

  minYearObj: any;
  maxYearObj: any;

  minYearMinMonth: any = 12;
  maxYearMaxMonth: any = 1;

  updateProduct(event: any) {
    this.warranty = null;
    this.dateSelected = null;
    this.minYear = this.minYearCopy;
    this.maxYear = this.maxYearCopy;
    this.selectedProd = this.productVarients.find((obj: any)=>obj.id == event.target.value);
    console.log(this.selectedProd);
    this.selectedProd.years_of_purchase.forEach((obj: any)=>{
      if(obj.year < this.minYear){
        this.minYear = obj.year;
        this.minYearObj = obj;
      }
      
      if(obj.year > this.maxYear){
        this.maxYear = obj.year;
        this.maxYearObj = obj;
      }
    })

    this.minYearObj.months_of_purchase.forEach((obj: any)=>{
      if(obj.month < this.minYearMinMonth){
        this.minYearMinMonth = String(obj.month).padStart(2, '0')
      }
    })

    this.maxYearObj.months_of_purchase.forEach((obj: any)=>{
      if(obj.month > this.maxYearMaxMonth){
        this.maxYearMaxMonth = String(obj.month).padStart(2, '0')
      }
    })
  }

  selectedYear: any;
  updateYear(value: any) {
    this.selectedYear = this.selectedProd.years_of_purchase.find((obj: any)=>obj.year == value);
  }
  warranty: any;
  updateMonth(value: any) {
    const selectedMonthInfo = this.selectedYear.months_of_purchase.find((obj: any)=>obj.month == value);
    if(selectedMonthInfo){
      if(selectedMonthInfo?.date_ranges.length){
        const formatedDate = this.dateSelected.replace(/-/g, "");
        for(let i = 0;i<selectedMonthInfo.date_ranges.length;i++){
          const obj = selectedMonthInfo.date_ranges[i];
          if(formatedDate <= obj.end_date && formatedDate >= obj.start_date){
            this.warranty = obj;
            break;
          }
        }
        if(!this.warranty){
          this.warranty = selectedMonthInfo.default;
        }
      }else{
        this.warranty = selectedMonthInfo.default;
      }
    }
    console.log(this.warranty);
  }


  readMore = false;
  today;
  constructor(private state: GlobalStateService,
    private api: ApiService,) { 
      const date = new Date();
    this.today = `${date.getFullYear()}-${(String(date.getMonth() + 1)).padStart(2, '0')}-${(String(date.getDate())).padStart(2, '0')}`;
    }

  ngOnInit(): void {
    this.getproductWarrantyInformation();
  }

  getproductWarrantyInformation() {
    this.api.getproductWarrantyInformation().subscribe({
      next: (res: any) => {
        console.log(res);
        this.metaData = res.data;
      },
      error: (err) => {
      }
    });
  }

}
