import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FifaEventComponent } from './fifa-event.component';
import { RouterModule, Routes } from '@angular/router';
import { MaskPhonePipe } from 'src/app/shared/pipes/mask-phone.pipe';

const routes: Routes = [
  {
    path: '',
    component: FifaEventComponent
  }
]

@NgModule({
  declarations: [
    FifaEventComponent,
    MaskPhonePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FifaEventModule { }
