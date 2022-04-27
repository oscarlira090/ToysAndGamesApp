import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing'
import { Observable, of } from 'rxjs';

import { ProductService } from './ProductService'
//import 'rxjs/add/observable/of';
import { Product } from './models/Product';



function createResponse(body: any) {
  return of(
    new HttpResponse({ body: JSON.stringify(body) })
  )
}

class MockHttp {
  get() {
    return createResponse([])
  }
}

const products: Product[] = [
  {
    id: 1,
    name: '',
    description: '',
    company: '',
    ageRestriction: 1,
    price: 1200,
    //file: null
  }];



let service: ProductService
let http: HttpClient;

describe('Product Service', () => {
  beforeEach(() => {
    const bed = TestBed.configureTestingModule(
      { providers: [ProductService, { provide: HttpClient, useClass: MockHttp }] }
    );

    http = bed.get(HttpClient);
    service = bed.get(ProductService);
  });

  it('should return all Products', (done: DoneFn) => {

    spyOn(http, 'get').and.returnValue(of(products));
    
    service.getProducts().subscribe({
      next: productsHttp => {

        expect(productsHttp)
          .withContext('expected products')
          .toEqual(products);
        done();
      },
      error: done.fail
    });
  });

  it('should return get Product by productId', (done: DoneFn) => {

    const errorResponse = new HttpErrorResponse({
      error: 'Error: response status is 400',
      status: 400, statusText: 'Product Not Found'
    });

    spyOn(http, 'get').and.returnValue(createResponse(errorResponse));

    service.getProduct(1).subscribe(
      product => fail('expected an error, not heroes'),
      error => expect(error.message).toContain('Error: response status is 400')
    );
  });

});
    

