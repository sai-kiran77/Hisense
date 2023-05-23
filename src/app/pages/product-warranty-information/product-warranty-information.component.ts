import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-product-warranty-information',
  templateUrl: './product-warranty-information.component.html',
  styleUrls: ['./product-warranty-information.component.scss']
})
export class ProductWarrantyInformationComponent implements OnInit {

  product_purchase_date = '';

  setRegistrationDate(e: any){

  }

  metaData: any = [];

  selectedCat: any = null;
  productVarients: any = [];
  selectedProd: any = null;
  updateCategory(event: any) {
    this.productVarients = [];
    this.metaData.find((obj: any)=>obj.id == event.target.value)?.products.forEach((object: any)=>{
      object.product_variants.forEach((o: any)=>{
        this.productVarients.push(o);
      })
    });
    console.log(this.productVarients);
  }

  updateProduct(event: any) {
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
