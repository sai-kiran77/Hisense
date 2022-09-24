import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLaunchesComponent } from './new-launches.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: NewLaunchesComponent
  }
] 


@NgModule({
  declarations: [
    NewLaunchesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NewLaunchesModule { }
