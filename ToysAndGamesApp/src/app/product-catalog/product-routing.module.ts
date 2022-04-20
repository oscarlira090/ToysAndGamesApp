import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { ProductsResolver } from '../routes/products.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'product-add', component: ProductFormComponent },
      { path: 'product-add/:productId', component: ProductFormComponent },
      { path: 'product-list', component: ProductListComponent, resolve: { products: ProductsResolver } },
      { path: '**', redirectTo:'product-list' }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductsResolver]
})
export class ProductRoutingModule { }
