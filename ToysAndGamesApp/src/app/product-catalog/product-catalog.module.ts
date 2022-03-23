import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//conatiners

import { ProductViewerComponent } from './containers/product-viewer/product-viewer.component';

//components

import { ProductListComponent } from './components/product-list/product-list.component';

//services
import { ProductService } from './ProductService';


@NgModule({
  declarations: [
    ProductViewerComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    ProductViewerComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductCatalogModule { }
