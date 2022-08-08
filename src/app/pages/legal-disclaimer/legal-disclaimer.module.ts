import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalDisclaimerComponent } from './legal-disclaimer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path: '', component: LegalDisclaimerComponent
  }
]

@NgModule({
  declarations: [
    LegalDisclaimerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LegalDisclaimerModule { }
