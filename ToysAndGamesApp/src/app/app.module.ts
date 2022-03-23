import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductCatalogModule } from './product-catalog/product-catalog.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductCatalogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
