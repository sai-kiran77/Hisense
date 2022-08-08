import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShellComponent } from './components/shell/shell.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'tv-series',
        loadChildren: () => import('./pages/tv-series/tv-series/tv-series.module').then(m => m.TvSeriesModule)
      },
      {
        path: 'tv',
        loadChildren: () => import('./pages/tv/tv.module').then(m => m.TvModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule)
      },
      {
        path: 'privacy-policy',
        loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
      },
      {
        path: 'legal-disclaimer',
        loadChildren: () => import('./pages/legal-disclaimer/legal-disclaimer.module').then(m => m.LegalDisclaimerModule)
      },
      // {
      //   path: 'c/tv',
      //   loadChildren: () => import('./pages/categories/tv/tv.module').then(m => m.TvModule)
      // },
      {
        path: 'c/:category',
        loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'v/:varient',
        loadChildren: () => import('./pages/varient/varient.module').then(m => m.VarientModule)
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: '*', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
