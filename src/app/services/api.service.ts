import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = 'https://hisense-apis.bloginguru.com/v1';

  constructor(private http: HttpClient) { }

  getSlugData(slugCategory: string, slugURL = '/categories/load-by-slug/') {
    return this.http.get(this.baseURL + slugURL + slugCategory);
  }

  getVarientData(varient: string, varientURL = '/product-variants/load-by-slug/') {
    return this.http.get(this.baseURL + varientURL + varient);
  }

  postContactUsForm(body: any, endpoint: string = '/contact-requests') {
    return this.http.post(this.baseURL + endpoint, body);
  }
}
