import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VarientComponent } from './varient.component';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path:'', component: VarientComponent
  }
]

@NgModule({
  declarations: [
    VarientComponent,
  ],
  imports: [
    SwiperModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class VarientModule { }
