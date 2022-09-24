import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = `${environment.baseApiUrl}/v1`;

  headerItems = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getSlugData(slugCategory: string, slugURL = '/categories/load-by-slug/') {
    return this.http.get(this.baseURL + slugURL + slugCategory);
  }

  getVarientData(varient: string, varientURL = '/product-variants/load-by-slug/') {
    return this.http.get(this.baseURL + varientURL + varient);
  }

  getPressCoverages(params: any, varientURL = '/press-coverages') {
    return this.http.get(this.baseURL + varientURL, {
      params
    });
  }

  postContactUsForm(body: any, endpoint: string = '/contact-requests') {
    return this.http.post(this.baseURL + endpoint, body);
  }

  signup(body: any, endpoint: string = '/delightful-india/register') {
    return this.http.post(this.baseURL + endpoint, body);
  }

  PerfectMatch(body: any, endpoint: string = '/campaigns/perfect-match-2022/register') {
    return this.http.post(this.baseURL + endpoint, body);
  }

  login(body: any, endpoint: string = '/delightful-india/login') {
    return this.http.post(this.baseURL + endpoint, body);
  }

  // ?username=email1_4788
  getHints(params: any, endpoint: string = '/delightful-india/hints') {
    return this.http.get(this.baseURL + endpoint, {
      params
    });
  }

  getTechTestimonials(params: any,endpoint: string = '/tech-testimonials'){
    return this.http.get(this.baseURL + endpoint,{
      params
    });
  }

  getHeaderItems(endpoint: string = '/pages/website-header'){
    return this.http.get(this.baseURL + endpoint);
  }
  
  getPageSlides(params: any,endpoint: string = '/pages/metadata'){
    return this.http.get(this.baseURL + endpoint,{
      params
    });
  }
}
