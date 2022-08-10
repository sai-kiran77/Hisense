import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelightfulIndiaComponent } from './delightful-india.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: DelightfulIndiaComponent
  }
]

@NgModule({
  declarations: [
    DelightfulIndiaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DelightfulIndiaModule { }
