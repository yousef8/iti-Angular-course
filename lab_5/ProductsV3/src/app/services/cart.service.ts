
import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { BehaviorSubject, map, reduce } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BehaviorSubject<Array<CartItem>> = new BehaviorSubject<Array<CartItem>>([]);
  private itemsCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getCart() {
    return this.cart.asObservable();
  }

  getItemsCount() {
    return this.itemsCount.asObservable();
  }

  private updateItemsCount() {
    const cart = this.cart.value;
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    this.itemsCount.next(totalCount);
  }

  addItem(product: Product) {
    const cart: Array<CartItem> = this.cart.value;
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex === -1) {
      cart.push({ id: product.id, product, quantity: 1 });
    } else {
      cart[existingItemIndex].quantity++;
    }

    this.cart.next([...cart]);
    this.updateItemsCount();
  }

  incItemQty(id: number) {
    const cart: Array<CartItem> = this.cart.value;
    const item: CartItem | undefined = cart.find(item => item.id === id);
    if (item == undefined) {
      return;
    }

    ++item.quantity;
    this.cart.next([...cart]);
    this.updateItemsCount()
  }

}
