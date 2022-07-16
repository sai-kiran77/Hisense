import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvSeriesComponent } from './tv-series.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: '',
    component: TvSeriesComponent
  }
]

@NgModule({
  declarations: [
    TvSeriesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class TvSeriesModule { }
