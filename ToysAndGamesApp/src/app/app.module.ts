import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Routes
import { AppRoutingModule } from './app-routing.module';


//Modules
import { ProductCatalogModule } from './product-catalog/product-catalog.module';
import { LoginModule } from './login/login.module';

//Store Management
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './state/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/products.effects';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductCatalogModule,
    LoginModule,
    StoreModule.forRoot({ data: productsReducer }),
    EffectsModule.forRoot([ProductEffects])
  ],

  declarations: [
    AppComponent,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
