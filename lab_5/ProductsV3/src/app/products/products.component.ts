import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products!: Array<Product>;

  constructor(private games: GamesService) { }

  ngOnInit() {
    this.games.getList().subscribe((elem) => { this.products = elem.products });
  }
}
