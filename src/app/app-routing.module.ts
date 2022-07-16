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
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
