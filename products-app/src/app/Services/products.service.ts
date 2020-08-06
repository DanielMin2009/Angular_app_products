import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];
  gnome: Product;

  constructor() {}

  public getProducts(): Observable<Product[]> {
    const products = require('./products.json');
    return of(products).pipe(tap((data) => console.log('service ', data)));
  }
}