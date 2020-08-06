import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Product } from 'src/app/Models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('productBox') productBox: ElementRef;
  public products: Product[] = [];
  public product: Product;

  public totalProducts: number;
  public page: number = 1;
  public itemsPerPage: number = 10;

  constructor(
    public _productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public async getProducts(): Promise<void> {
    this._productsService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log('What data?', data);
        localStorage.setItem('products', JSON.stringify(this.products));
        // console.log(this.products);
      },
      (error) => alert('error on load data')
    );
  }
  viewProduct(idx: number) {
    this.router.navigate(['/product', idx]);
  }

  showItems(event) {
    this.itemsPerPage = event.target.value;
  }

  toggleActivation(e: any) {
    e.stopPropagation();
    this.productBox.nativeElement;
    e.stopPropagation();
    console.log('click inside input');
    return false;
  }
}
