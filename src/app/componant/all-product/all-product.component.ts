import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../interFace/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-product',
  imports: [CommonModule , FormsModule ],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css'
})
export class AllProductComponent {
  @Input() data:any = {};
  @Output() item = new EventEmitter
  addButtn:boolean = false
  amount:number = 0


  constructor(){}


  add(){
    this.item.emit({item:this.data , quantity : this.amount})
  }
}
