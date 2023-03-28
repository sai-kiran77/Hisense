import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-tech-testimonials',
  templateUrl: './tech-testimonials.component.html',
  styleUrls: ['./tech-testimonials.component.scss']
})
export class TechTestimonialsComponent implements OnInit {

  // productFilter = null;

  testimonials: any = [];

  paginatedTestimonials: any = [];
  GlobalpaginatedTestimonials: any = [];

  totalPagesinTen: any = [];
  GlobaltotalPagesinTen: any = [];

  params = {
    per_page: 10,
    page: 1
  }

  // metaDataTabs = ['National', 'Global'];
  metaDataTabs = ['National'];
  currentTab = 'National';

  changeTab(tab: any) {
    this.params = {
      per_page: 10,
      page: 1
    }
    this.currentTab = tab;
    this.totalPagesinTen = [];
    this.paginatedTestimonials = [];
    let currentTestimonials = [];
    if (this.currentTab == 'Global') {
      currentTestimonials = this.currentTestimonials?.filter((obj: any) => obj.country == 'global');
      this.paginatedTestimonials = currentTestimonials.slice(((this.params.page - 1) * 10), (((this.params.page) * 10)));
    } else {
      currentTestimonials = this.currentTestimonials?.filter((obj: any) => obj.country == 'national');
      this.paginatedTestimonials = currentTestimonials.slice(((this.params.page - 1) * 10), (((this.params.page) * 10)));
      // this.getTechTestimonials(1);
    }
    this.totalPagesinTen = new Array(Math.ceil(currentTestimonials.length / this.params.per_page));
  }

  constructor(private state: GlobalStateService,
    public sanitizer: DomSanitizer,
    private api: ApiService,
    private title: Title) {
    this.title.setTitle('Hisense India | Tech Testimonials');
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
        this.updateProductFilter({target: {value: this.testimonials[0].id}});
        res.data = this.currentTestimonials;
        this.paginatedTestimonials = res.data.filter((obj: any) => obj.country == 'national').slice(((this.params.page - 1) * 10), this.params.per_page);
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
    this.paginatedTestimonials = this.currentTestimonials?.filter((obj: any) => obj.country == this.currentTab.toLowerCase()).slice(((this.params.page - 1) * 10), (((this.params.page) * 10)));
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

  currentTestimonials: any = null;
  productFilter: any = null;

  totalTestimonialsCount = 0;
  updateProductFilter(event: any){
    const testimonials = this.testimonials.filter((testimonial: any)=>{
      return testimonial.id == event.target.value;
    });
    this.productFilter = event.target.value;
    this.currentTestimonials = testimonials[0].tech_testimonials;
    this.getPaginatedTestimonials(1);
    this.totalTestimonialsCount = this.currentTestimonials.length;
    this.paginatedTestimonials = this.currentTestimonials.filter((obj: any) => obj.country == 'national').slice(((this.params.page - 1) * 10), this.params.per_page);
    this.totalPagesinTen = new Array(Math.ceil(this.currentTestimonials.length / this.params.per_page));
  }
}
