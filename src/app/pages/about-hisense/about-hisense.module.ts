import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHisenseComponent } from './about-hisense.component';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ValuesComponent } from './values/values.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {
    path: 'values', component: ValuesComponent
  },
  {
    path: 'overview', component: OverviewComponent
  },
  {
    path: 'technology', component: TechnologyComponent
  },
  {
    path: '', component: AboutHisenseComponent, redirectTo: 'overview'
  }
]

@NgModule({
  declarations: [
    AboutHisenseComponent,
    OverviewComponent,
    ValuesComponent,
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutHisenseModule { }
