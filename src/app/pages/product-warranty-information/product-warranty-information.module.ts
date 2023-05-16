import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductWarrantyInformationComponent } from './product-warranty-information.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ProductWarrantyInformationComponent
  }
]

@NgModule({
  declarations: [
    ProductWarrantyInformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductWarrantyInformationModule { }
