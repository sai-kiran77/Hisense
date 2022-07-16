import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvComponent } from './tv.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { MiniLedTvDetailsComponent } from './mini-led-tv-details/mini-led-tv-details.component';

const routes: Routes = [
  {
    path: '',
    component: TvComponent
  },
  {
    path: 'mini-led-uled-tv-u9g',
    component: MiniLedTvDetailsComponent
  }
]

@NgModule({
  declarations: [
    TvComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class TvModule { }
