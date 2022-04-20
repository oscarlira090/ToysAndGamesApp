import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//components

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

//services
import { ProductService } from './ProductService';

//router
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    
  ],
  providers: [
    ProductService
  ]
})
export class ProductCatalogModule { }
