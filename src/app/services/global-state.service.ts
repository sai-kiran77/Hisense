import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {

  constructor() { }

  mobileNavToggle = new BehaviorSubject(false);



}
