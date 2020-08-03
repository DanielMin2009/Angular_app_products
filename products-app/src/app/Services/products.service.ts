import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //private products: Product[];

  constructor( ) {
  }

  public getProducts(): Observable<Product[]> {
    const products = require('./products.json');
    return of(products).pipe(tap(data => console.log(data)));
  }
}

export interface Product {
  id: number;
  name: string;
  sku: string;
  barcode: string;
  image: string;
  price: string;
  enabled: boolean;
  stock: Stock;
}

export interface Stock {
  id: number;
  quantity: number;
  status: string;
  warehouse: Warehouse;
}

export interface Warehouse {
  id: number;
  name: string;
  city: string;
}
