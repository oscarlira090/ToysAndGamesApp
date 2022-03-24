import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { Response } from '../../models/Response';
import { ProductService } from '../../ProductService';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './/product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})


export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((products: Product[]) => this.products = products);
  }

  addProduct() {
    this.router.navigate(['/product-add', { product: JSON.stringify(new Product()) }],);
  }

  editProduct(product:Product) {
    this.router.navigate(['/product-add', { product: JSON.stringify(product) }],);
  }

  removeProduct(productId: number) {
    this.productService.removeProduct(productId).subscribe((msg: Response) => console.log(msg.message));
  }

}
