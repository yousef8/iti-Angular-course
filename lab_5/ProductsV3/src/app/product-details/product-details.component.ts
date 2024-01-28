import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { Router } from '@angular/router';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe, RatingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() id!: number;
  product?: Product;

  constructor(private router: Router, private games: GamesService) {
  }

  ngOnInit() {
    this.games.getGameDetails(this.id).subscribe((product) => { this.product = product });
  }

}
