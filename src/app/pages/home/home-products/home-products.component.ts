import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {

  products: any = [];
  // products = [
  //   {
  //     "text": "TV",
  //     "url": "/c/tv/",
  //     "image": environment.baseApiUrl + "/media/categories/tv-thumb.jpg"
  //   },
  //   {
  //     "text": "Refrigerator",
  //     "url": "/c/refrigerator/",
  //     "image": environment.baseApiUrl + "/media/categories/refrigerator-thumb.png"
  //   },
  //   {
  //     "text": "Air Conditioner",
  //     "url": "/c/air-conditioner/",
  //     "image": environment.baseApiUrl + "/media/categories/air-conditioner-thumb.png"
  //   },
  //   {
  //     "text": "Washing Machine",
  //     "url": "/c/washing-machine/",
  //     "image": environment.baseApiUrl + "/media/categories/washing-machine-thumb.png"
  //   }
  // ]



  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getHeaderItems().subscribe((res: any) => {
      this.products = res.data.map((obj: any)=>{
        return {
          ...obj,
          "image": obj.thumb_image_small
        }
      })

  }, (err) => {
      console.log(err);
  })
  }

}
