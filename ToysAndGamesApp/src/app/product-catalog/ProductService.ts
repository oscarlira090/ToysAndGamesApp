import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Product } from './models/Product';

const TOYSANDGAMES_API: string = 'https://localhost:7271/api/Product';

@Injectable()
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    /*
    const products = of([
      { id: 1, name: 'producto 1', company: 'matel', ageRestriction: 1, price: 200 },
      { id: 2, name: 'producto 2', company: 'matel', ageRestriction: 1, price: 200 },
      { id: 3, name: 'producto 2', company: 'matel', ageRestriction: 1, price: 200 }
    ]);
    return products;*/

    return this.http
      .get<Product[]>(TOYSANDGAMES_API).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    console.log(error)
    return throwError(errorMessage);
  }
  
}

