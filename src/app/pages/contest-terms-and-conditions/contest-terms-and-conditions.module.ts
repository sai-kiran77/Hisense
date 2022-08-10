import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestTermsAndConditionsComponent } from './contest-terms-and-conditions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ContestTermsAndConditionsComponent

  }
]

@NgModule({
  declarations: [
    ContestTermsAndConditionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContestTermsAndConditionsModule { }
