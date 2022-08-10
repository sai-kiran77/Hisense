import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreasureHuntComponent } from './treasure-hunt.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: TreasureHuntComponent
  }
]

@NgModule({
  declarations: [
    TreasureHuntComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TreasureHuntModule { }
