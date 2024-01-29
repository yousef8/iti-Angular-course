import { Component } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartService.getCart().subscribe((cart: CartItem[]) => { this.cart = cart });
  }

  incrementItemQty(id: number) {
    this.cartService.incItemQty(id);
  }

  decrementItemQty(id: number) {
    this.cartService.decrementItemQty(id);
  }

  deleteItem(id: number) {
    this.cartService.deleteItem(id);
  }
}
