import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FifaEventComponent } from './fifa-event.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FifaEventComponent
  }
]

@NgModule({
  declarations: [
    FifaEventComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FifaEventModule { }
