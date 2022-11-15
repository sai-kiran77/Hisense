import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipateFifa2022Component } from './participate-fifa2022/participate-fifa2022.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: ParticipateFifa2022Component
  }
]

@NgModule({
  declarations: [
    ParticipateFifa2022Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParticipateFifa2022Module { }
