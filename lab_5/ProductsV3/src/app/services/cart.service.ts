import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BehaviorSubject<Array<CartItem>>;
  private itemsCount: BehaviorSubject<number>;

  constructor() {
    this.cart = new BehaviorSubject<Array<CartItem>>([]);
    this.itemsCount = new BehaviorSubject<number>(0);

    console.log("from cart service ngoninit");
    this.cart.subscribe((cart) => {
      let count: number = 0;
      cart.forEach(item => count += item.quantity);
      this.itemsCount.next(count);
    });

  }

  getCart() {
    return this.cart.asObservable();
  }

  addItem(product: Product) {
    const cart: Array<CartItem> = this.cart.value;

    if (cart.length === 0) {
      cart.push({ id: product.id, product: product, quantity: 1 })
      this.cart.next(cart);
      return;
    }

    const cartItemIdx: number = cart.findIndex((item) => item.id === product.id);
    if (cartItemIdx === -1) {
      cart.push({ id: product.id, product: product, quantity: 1 })
      this.cart.next(cart);
      return;
    }

    ++cart[cartItemIdx].quantity;
    this.cart.next(cart);
  }

  getItemsCount() {
    return this.itemsCount.asObservable();
  }

}
