import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardService } from '../Serveces/card.service';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  ngOnInit(): void {
    this.getAllProduct()
  }
  cardProduct: any[] = []
  tatal:any = 0
  success:boolean = false

  constructor(private serv:CardService){}
  getAllProduct() {
    if ('card' in localStorage) {
      this.cardProduct = JSON.parse(localStorage.getItem('card')!)
    }
    this.getTotal()

  }
  deletItem(index:number){
    this.cardProduct.splice(index , 1)
    this.getTotal()

    localStorage.setItem("card" ,JSON.stringify(this.cardProduct) )
  }
  clearAllItem(){
    this.cardProduct =[]
    this.getTotal()

    localStorage.setItem("card" ,JSON.stringify(this.cardProduct) )
  }

  getTotal() {
    this.tatal = 0
    for (let x in this.cardProduct) {
      this.tatal += this.cardProduct[x].item.price * this.cardProduct[x].quantity
    }
  }

  addCard(){
    let product = this.cardProduct.map(item => {
      return {productId :item.item.id , quantity : item.quantity}
    })

    let model = {
      userId : 5,
      date : new Date() ,
      product : product
    }
    this.serv.addCare(model).subscribe((res) => {
      this.success = true
    })

  }
}
