import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../ProductService';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'product-form',
  templateUrl: './/product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})

export class ProductFormComponent implements OnInit {

  product?: Product;
  productId: number = 0;
  imagesDisplay: any[] = [];

  constructor(private router: Router, private actDataRoute: ActivatedRoute, private _sanitizer: DomSanitizer, private productService: ProductService) { }

  ngOnInit() {
    this.productId = JSON.parse(this.actDataRoute.snapshot.paramMap.get('productId')!);
    
    if (this.productId > 0) {
      this.productService.getProduct(this.productId).subscribe((product: Product) => this.product = product);

      this.productService.getProductImages(this.productId).subscribe((images: string[]) => {

        for (let i = 0; i < images.length; i++) {
          this.productService.getProductImage(encodeURIComponent(images[i])).subscribe((image: any) => {
            let objectURL = URL.createObjectURL(image);
            this.imagesDisplay.push(this._sanitizer.bypassSecurityTrustUrl(objectURL));
          });
        }

      });
    }
  }

  save(product: Product, isValid: boolean) {
    if (isValid) {
      
      if (this.product?.id! > 0) 
        product!.id = this.product!.id

      if (this.product?.file! != undefined)
        product!.file = this.product!.file;
      
      this.productService.saveProduct(product).subscribe((product: Product) => {
        this.product = product
        this.router.navigate(['/product-list', {saved:true}],);
      });
    }
  }

  onChange(event: any) {
    this.product!.file = event.target.files[0];
  }
}
