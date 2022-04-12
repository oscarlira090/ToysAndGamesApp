import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/components/dashboard.component';
import { ProductListComponent } from './product-catalog/components/product-list/product-list.component';
import { ProductFormComponent } from './product-catalog/components/product-form/product-form.component';

//Test purposes
import { TutorialComponent } from './tutorial/components/tutorial.component';

//Resolvers
import { ProductsResolver } from './routes/products.resolver';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product-add', component: ProductFormComponent },
  { path: 'product-add/:productId', component: ProductFormComponent },
  { path: 'product-list', component: ProductListComponent, resolve: { products: ProductsResolver } },
  //Test purposes
  { path: 'tutorial', component: TutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductsResolver]
})
export class AppRoutingModule { }
