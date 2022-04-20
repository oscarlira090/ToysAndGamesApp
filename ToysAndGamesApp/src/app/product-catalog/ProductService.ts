import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse,  } from '@angular/common/http';

import { Product } from './models/Product';
import { Response } from './models/Response';

const TOYSANDGAMES_API: string = 'https://localhost:7271/api/Product';
const TOYSANDGAMES_IMAGES_API: string = 'https://localhost:7271/api/ProductImage';

let httpOptions = {
  headers: new HttpHeaders({ })
};
@Injectable()
export class ProductService {

 

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
   
    return this.http
      .get<Product[]>(TOYSANDGAMES_API).pipe(delay(1000),catchError(this.handleError));
  }

  getProduct(productId:number): Observable<Product> {

    return this.http
      .get<Product>(`${TOYSANDGAMES_API}/${productId}`).pipe(catchError(this.handleError));
  }

  getProductImages(productId: number): Observable<string[]> {

    return this.http
      .get<string[]>(`${TOYSANDGAMES_IMAGES_API}/${productId}`).pipe(catchError(this.handleError));
  }

  getProductImage(url: string): Observable<Blob> {
    let httpHeaders = new HttpHeaders()
      .set('Accept', "image/webp,*/*");

    return this.http
      .get<Blob>(`${TOYSANDGAMES_IMAGES_API}/display/${url}`, { headers: httpHeaders, responseType: 'blob' as 'json' });
  }

  saveProduct(product: Product): Observable<Product> {

    const formData = new FormData();
    formData.append('Id', product.id == undefined ? "0" : product.id.toString());
    formData.append('Name', product.name.toString());
    formData.append('Description', product.description!);
    formData.append('Company', product.company!);
    formData.append('AgeRestriction', product.ageRestriction?.toString()!);
    formData.append('Price', product.price.toString());
    formData.append('File', product.file == undefined ? "" : product.file);

    console.log(product )

    return this.http
      .post<Product>(`${TOYSANDGAMES_API}`, formData).pipe(
        tap((producto: Product) => console.log(`added product w/ id=${producto.id}`)),
        catchError(this.handleError)
      );
  }

  removeProduct(productId: number): Observable<Response> {

    return this.http
      .delete<Response>(`${TOYSANDGAMES_API}/${productId}`).pipe(catchError(this.handleError));
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
    console.log(error);
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
}

