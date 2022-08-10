import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechTestimonialsComponent } from './tech-testimonials.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: TechTestimonialsComponent
  }
]

@NgModule({
  declarations: [
    TechTestimonialsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TechTestimonialsModule { }
