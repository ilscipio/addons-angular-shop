import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private readonly URL = 'control/solrProductsSearch';

  constructor (
    private httpClient:  HttpClient
  ) {}

  getProducts(productCategoryId: string) {
    return this.httpClient.post(this.URL, {
      'productCategoryId': productCategoryId
    }, { responseType: 'json' });
  }

}
