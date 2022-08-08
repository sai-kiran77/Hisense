import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-varient',
  templateUrl: './varient.component.html',
  styleUrls: ['./varient.component.scss']
})
export class VarientComponent implements OnInit {

  metaData: any;
  alive = true;

  constructor(private route:ActivatedRoute,
    private api: ApiService,
    private state: GlobalStateService) {
    this.state.mobileNavToggle.next(false);
  }

  ngOnInit(): void {
    this.route.params.pipe(takeWhile(_=>this.alive)).subscribe(routeParams => {
      console.log(routeParams);
      this.state.mobileNavToggle.next(false);
      this.loadMetaData(routeParams['varient']);
    });
  }
  
  loadMetaData(category: string){
    this.api.getVarientData(category).pipe(takeWhile(_=>this.alive)).subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.metaData = res.data;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  ngOnDestroy(){
    this.alive = false;
  }

}
