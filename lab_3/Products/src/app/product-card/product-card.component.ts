import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  createRange(arg0: number) {
    return new Array(Math.round(arg0)).fill(0).map((n, index) => index + 1);
  }
  @Input() product!: Product;
}
