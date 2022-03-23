import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../ProductService';

@Component({
  selector: 'product-list',
  templateUrl: './/product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((products: Product[]) => this.products = products);
  }
}
