import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  constructor() { }

  getData() {
    const data = JSON.parse(localStorage.getItem('userData')!)
    return data;
  }

}
