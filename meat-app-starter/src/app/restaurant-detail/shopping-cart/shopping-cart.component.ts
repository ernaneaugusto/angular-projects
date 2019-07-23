import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  clear(): any{
    this.shoppingCartService.clear();
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  removeItem(item: CartItem){
    this.shoppingCartService.removeItem(item);
  }
  addItem(item: MenuItem){
    this.shoppingCartService.addItem(item);
  }

  ngOnInit() {
  }

}
