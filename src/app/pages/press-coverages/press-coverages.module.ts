import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressCoveragesComponent } from './press-coverages.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PressCoveragesComponent
  }
]

@NgModule({
  declarations: [
    PressCoveragesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PressCoveragesModule { }
