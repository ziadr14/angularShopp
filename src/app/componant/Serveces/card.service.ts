import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }

  addCare(model:any){
    return this.http.post(`http://localhost:3000/product` , model)
  }
}
