import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Iproduct } from '../../interFace/iproduct';
import { Icategory } from '../../interFace/icategory';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private http:HttpClient) { }

  getAllProduct(){
    return this.http.get(`${environment.baseUrl}/product`)
  }
  getAllCat(){
    return this.http.get(`${environment.baseUrl}/category`)
  }
  getProByCat(keyword:string){
    return this.http.get(`${environment.baseUrl}/product?category=${keyword}`)
  }

  getProductById(id:number){
    return this.http.get(`${environment.baseUrl}/product/${id}`)
  }
}
