import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../ProductService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-form',
  templateUrl: './/product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})

export class ProductFormComponent implements OnInit {

  product?: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.product = JSON.parse(this.route.snapshot.paramMap.get('product')!);
  }

  save(product: Product, isValid: boolean) {
    if (isValid) {
      
      if (this.product?.id! > 0) 
        product!.id = this.product!.id

      if (this.product?.file! != undefined)
        product!.file = this.product!.file;
      
      this.productService.saveProduct(product).subscribe((product: Product) => this.product = product);
    }
  }

  onChange(event: any) {
    this.product!.file = event.target.files[0];
  }
}
