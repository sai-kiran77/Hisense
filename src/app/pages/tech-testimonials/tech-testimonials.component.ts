import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-tech-testimonials',
  templateUrl: './tech-testimonials.component.html',
  styleUrls: ['./tech-testimonials.component.scss']
})
export class TechTestimonialsComponent implements OnInit {

  testimonials: any = [];
  paginatedTestimonials: any = [];

  totalPagesinTen: any = [];

  params = {
    per_page: 10,
    page: 1
  }

  metaDataTabs = ['National', 'Global'];
  currentTab = 'National';

  changeTab(tab: any) {
    this.currentTab = tab;
    if (this.currentTab == 'Global') {
      this.testimonials = [];
      this.totalPagesinTen = [];
      this.paginatedTestimonials = [];
    } else {
      this.getTechTestimonials(1);
    }
  }

  constructor(private state: GlobalStateService,
    public sanitizer: DomSanitizer,
    private api: ApiService) {
    this.state.mobileNavToggle.next(false);
  }

  ngOnInit(): void {
    this.getTechTestimonials();
  }

  getTechTestimonials(page?: any) {
    if (page) {
      this.params.page = page;
    }
    this.api.getTechTestimonials(this.params).subscribe({
      next: (res: any) => {
        this.testimonials = res.data;
        this.paginatedTestimonials = res.data.slice(((this.params.page - 1) * 10), this.params.per_page);
        console.log(res.data);
        this.totalPagesinTen = new Array(Math.ceil(res.data.length / this.params.per_page));
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getPaginatedTestimonials(page?: any) {
    if (page) {
      this.params.page = page;
    }
    console.log(((this.params.page - 1) * 10), (((this.params.page) * 10)))
    this.paginatedTestimonials = this.testimonials.slice(((this.params.page - 1) * 10), (((this.params.page) * 10)));
    console.log(this.paginatedTestimonials);
  }

  playVideo(obj: any) {
    for (let object of this.paginatedTestimonials) {
      object.playVideo = false;
    }
    obj.playVideo = true;
  }

  getVideoLink(url: string) {
    url = url + '?autoplay=1&mute=0&showinfo=1&controls=1;';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
