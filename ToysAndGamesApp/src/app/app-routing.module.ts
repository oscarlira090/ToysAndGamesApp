import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/components/login.component';

//Resolvers
import { ProductsResolver } from './routes/products.resolver';

import { AuthGuardService } from './product-catalog/AuthGuardService';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  //lazy loading
  {
    path: 'products',
    loadChildren: () => import('./product-catalog/product-catalog.module').then(m => m.ProductCatalogModule), canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductsResolver, AuthGuardService]
})
export class AppRoutingModule { }
