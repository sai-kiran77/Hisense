import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuperBrandDaysComponent } from './super-brand-days.component';

const routes: Routes = [
  {
    path: '',
    component: SuperBrandDaysComponent
  }
]

@NgModule({
  declarations: [
    SuperBrandDaysComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SuperBrandDaysModule { }