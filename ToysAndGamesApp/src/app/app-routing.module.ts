import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/components/login.component';

import { DashboardComponent } from './dashboard/components/dashboard.component';

//Test purposes
import { TutorialComponent } from './tutorial/components/tutorial.component';

//Resolvers
import { ProductsResolver } from './routes/products.resolver';

import { AuthGuardService } from './product-catalog/AuthGuardService';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  //lazy loading
  {
    path: 'products',
    loadChildren: () => import('./product-catalog/product-catalog.module').then(m => m.ProductCatalogModule), canLoad: [AuthGuardService]
  },
  //Test purposes
 { path: 'tutorial', component: TutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductsResolver, AuthGuardService]
})
export class AppRoutingModule { }
