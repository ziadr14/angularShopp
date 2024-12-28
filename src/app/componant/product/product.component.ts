import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../interFace/iproduct';
import { Icategory } from '../../interFace/icategory';
import { CommonModule } from '@angular/common';
import { ApiProductService } from '../Serveces/api-product.service';
import { AllProductComponent } from '../all-product/all-product.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule , AllProductComponent ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products:Iproduct[] = []
  category:Icategory[] = []
  cardProduct:any[] = []

  constructor(private callApi : ApiProductService){
  }
  ngOnInit(): void {
    this.getAllProduct()
    this.getAllCategory()

  }

  getAllProduct(){
    this.callApi.getAllProduct().subscribe((res:any) => {
      this.products = res
    })
  }

  getAllCategory(){
    this.callApi.getAllCat().subscribe((res:any) => {
      this.category=res
    })
  }

  filterCAt(event:any){
    let value = event.target.value;
    console.log(value)
    if(value == "all"){
      this.getAllProduct()
    }else{
      this.getProductByCategory(value)
    }

  }

  getProductByCategory(keyword:string){
    return this.callApi.getProByCat(keyword).subscribe((res:any) => {
      this.products = res
    })
  }


  addToCard(event:any){
    if('card' in localStorage){
      this.cardProduct = JSON.parse(localStorage.getItem('card')!)
      let exest = this.cardProduct.find(item => item.item.id == event.item.id)
      if(exest){
        alert('Product is already in your card')
      }else{
        this.cardProduct.push(event)
        localStorage.setItem('card',JSON.stringify(this.cardProduct))
      }
    }else{
      this.cardProduct.push(event)
      localStorage.setItem('card',JSON.stringify(this.cardProduct))
    }
  }
}
