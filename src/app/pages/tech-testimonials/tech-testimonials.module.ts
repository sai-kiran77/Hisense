import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechTestimonialsComponent } from './tech-testimonials.component';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '', component: TechTestimonialsComponent
  }
]

@NgModule({
  declarations: [
    // TechTestimonialsComponent,
    // LoaderComponent
  ],
  imports: [
    CommonModule,
    // SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TechTestimonialsModule { }
