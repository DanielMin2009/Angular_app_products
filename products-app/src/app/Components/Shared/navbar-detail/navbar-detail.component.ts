import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-navbar-detail',
  templateUrl: './navbar-detail.component.html',
  styleUrls: ['./navbar-detail.component.scss']
})
export class NavbarDetailComponent implements OnInit {
  
  @Input() public product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
