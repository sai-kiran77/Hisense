import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersPromotionsComponent } from './offers-promotions.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: '', component: OffersPromotionsComponent
  }
]

@NgModule({
  declarations: [
    OffersPromotionsComponent,
    OffersPromotionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OffersPromotionsModule { }
