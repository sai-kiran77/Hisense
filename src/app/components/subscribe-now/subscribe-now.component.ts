import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-subscribe-now',
  templateUrl: './subscribe-now.component.html',
  styleUrls: ['./subscribe-now.component.scss']
})
export class SubscribeNowComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  email = '';

  subscribedSuccessModal = false;

  subscribeNow(){
    const body = {
      email: this.email,
    }
    this.api.subscribeUs(body).subscribe({
      next: (res: any) => {
        this.subscribedSuccessModal = true;
      },
      error: (err: any) => {
        this.subscribedSuccessModal = true;
      }
    });
  }

}
