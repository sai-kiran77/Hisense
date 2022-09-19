import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LinksFooterComponent } from './links-footer/links-footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShellComponent } from './shell/shell.component';
import { SocialLinksFooterComponent } from './social-links-footer/social-links-footer.component';
import { RouterModule } from '@angular/router';
import { MainSliderUIComponent } from './UI/main-slider/main-slider.component';
import { SwiperModule } from 'swiper/angular';
import { ProductSeriesComponent } from './UI/product-series/product-series.component';
import { FooterV2Component } from './footer-v2/footer-v2.component';

const components = [
  HeaderComponent,
  FooterComponent,
  NotFoundComponent,
  LinksFooterComponent,
  SocialLinksFooterComponent,
  ProductSeriesComponent,
  MainSliderUIComponent,
  FooterV2Component
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
