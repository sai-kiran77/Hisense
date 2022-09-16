import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxWheelModule } from 'ngx-wheel';

const routes: Routes = [
  {
    path: '', component: SpinnerComponent
  }
]

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    NgxWheelModule,
    RouterModule.forChild(routes)
  ]
})
export class SpinnerModule { }
