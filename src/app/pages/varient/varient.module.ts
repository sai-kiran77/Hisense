import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VarientComponent } from './varient.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', component: VarientComponent
  }
]

@NgModule({
  declarations: [
    VarientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VarientModule { }
