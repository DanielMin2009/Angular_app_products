import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public products: Product[] = [];
  idx: number;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute) {
    this.products = [];
  }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('products'));
    this.activatedRoute.params.subscribe((params) => {
      this.idx = +params['id'];
    });
    this.getProduct(this.idx).subscribe((product) => {
      this.product = product;
    });
    console.log('get product from local storage', this.product);
  }

  getProduct(id: number): Observable<Product> {
    const PRODUCT = this.products.filter((product) => product.id === id);
    return from(PRODUCT);
  }
}
