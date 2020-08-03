import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from 'src/app/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products: Product[];

  totalProducts: number;
  page: number = 1;

  constructor( public productsService: ProductsService ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public async getProducts(): Promise<void> {
    this.products = await this.productsService.getProducts().toPromise();
    this.totalProducts = this.products.length;
  }
}
