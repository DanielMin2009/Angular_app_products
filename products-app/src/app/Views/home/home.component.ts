import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from 'src/app/Services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[];
  public product: Product;

  totalProducts: number;
  page: number = 1;

  constructor( public productsService: ProductsService, private router: Router ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public async getProducts(): Promise<void> {
    this.products = await this.productsService.getProducts().toPromise();
    this.totalProducts = this.products.length;
  }
  viewProduct(idx: number) {
    console.log(this.product);
    this.router.navigate(['/product', idx, this.product]);
  }
}
