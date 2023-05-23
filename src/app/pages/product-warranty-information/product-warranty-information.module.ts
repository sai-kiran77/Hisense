import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductWarrantyInformationComponent } from './product-warranty-information.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ProductWarrantyInformationModule { }
