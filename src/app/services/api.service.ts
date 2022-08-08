import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = 'https://hisense-apis.bloginguru.com/v1';

  constructor(private http: HttpClient) { }

  getSlugData(slugCategory: string, slugURL = '/categories/load-by-slug/'){
    return this.http.get(this.baseURL + slugURL + slugCategory);
  }
}
