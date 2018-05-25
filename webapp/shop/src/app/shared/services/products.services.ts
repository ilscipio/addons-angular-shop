import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private readonly productsByCategory = 'control/solrProductsSearch';
   private readonly productsByKeyword = 'control/solrKeywordSearch';

  constructor (
    private httpClient:  HttpClient
  ) {}

  getProductsByCategory(productCategoryId: String) {
    return this.httpClient.post(this.productsByCategory, {
      'productCategoryId': productCategoryId
    }, { responseType: 'json' });
  }

  getProductsById(productId: String) {
    console.log('productId:' + productId);
    return this.httpClient.post(this.productsByKeyword, {
      'query': 'productId:' + productId
    }, { responseType: 'json' });
  }


}
