import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Modules
import { ProductCatalogModule } from './product-catalog/product-catalog.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TutorialModule } from './tutorial/tutorial.module';

import { AppRoutingModule } from './app-routing.module';

import { productsReducer } from './state/products.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductCatalogModule,
    DashboardModule,
    StoreModule.forRoot({ products: productsReducer }),
    TutorialModule
  ],

  declarations: [
    AppComponent,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
