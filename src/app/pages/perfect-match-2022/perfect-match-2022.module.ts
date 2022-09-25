import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectMatch2022Component } from './perfect-match2022.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxWheelModule } from 'ngx-wheel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PerfectMatch2022Component
  }
];

@NgModule({
  declarations: [
    PerfectMatch2022Component
  ],
  imports: [
    CommonModule,
    NgxWheelModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class PerfectMatch2022Module { }
