import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit,OnDestroy {

  metaData: any;
  alive = true;
  // fragment: any = '';
  fallbackImg = 'https://www.hisense-india.com/wp-content/themes/hisense/images/tv/A6H.webp'

  constructor(private route:ActivatedRoute,
    private api: ApiService,
    private state: GlobalStateService,
    private title: Title,
    private meta: Meta) {
    this.state.mobileNavToggle.next(false);

  }
  
  ngOnInit(): void {
    // does not render when there is a update in params
    // const category = this.route.snapshot.paramMap.get('category');
    // console.log(category);

    //renders when there is a update in params
    this.route.params.pipe(takeWhile(_=>this.alive)).subscribe(routeParams => {
      // console.log(routeParams);
      this.state.mobileNavToggle.next(false);
      this.loadMetaData(routeParams['category']);
    });

    // this.route.fragment.pipe(takeWhile(_=>this.alive)).subscribe((fragment) => {
    //   // console.log("My hash fragment is here => ", fragment);
    //   this.state.mobileNavToggle.next(false);
    //   this.fragment = fragment;
    // })
    
  }
  
  loadMetaData(category: string){
    this.api.getSlugData(category).pipe(takeWhile(_=>this.alive)).subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.metaData = res.data;
        this.seoTags(res.data.seo_info);
        // if(this.fragment){
        //   location.hash = '';
        //   location.hash = "#" + this.fragment;
        // }
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  seoTags(data: any){
    this.title.setTitle(data.title);
    this.meta.updateTag({
      name: 'description',
      content: data.description
    })
    data.meta.forEach((obj: any)=>{
      if(obj.attributes){
        for(let key in obj.attributes){
          this.meta.updateTag({
            property: key,
            content: obj.attributes[key]
          })
        }
      }
    })
  }

  ngOnDestroy(){
    this.alive = false;
  }

}
