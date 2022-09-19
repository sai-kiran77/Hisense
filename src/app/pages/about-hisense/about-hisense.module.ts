import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHisenseComponent } from './about-hisense.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AboutHisenseComponent
  }
]

@NgModule({
  declarations: [
    AboutHisenseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutHisenseModule { }
