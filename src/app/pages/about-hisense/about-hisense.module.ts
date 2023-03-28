import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHisenseComponent } from './about-hisense.component';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ValuesComponent } from './values/values.component';
import { TechnologyComponent } from './technology/technology.component';
import { CsrComponent } from './csr/csr.component';
import { PressCoveragesComponent } from '../press-coverages/press-coverages.component';
import { TechTestimonialsComponent } from '../tech-testimonials/tech-testimonials.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'values', component: ValuesComponent
  },
  {
    path: 'csr', component: CsrComponent
  },
  {
    path: 'overview', component: OverviewComponent
  },
  {
    path: 'technology', component: TechnologyComponent
  },
  {
    path: 'tech-testimonials', component: TechTestimonialsComponent
  },
  {
    path: 'newsroom', component: PressCoveragesComponent
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
    TechnologyComponent,
    CsrComponent,
    PressCoveragesComponent,
    TechTestimonialsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AboutHisenseModule { }
