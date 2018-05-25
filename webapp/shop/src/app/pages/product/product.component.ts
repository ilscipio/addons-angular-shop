import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { ProductService } from 'app/shared/services/products.services';
import { ActivatedRoute } from '@angular/router';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})

export class ProductPageComponent implements OnInit {
  data: Date = new Date();
  product: Map<String, Object> = new Map();
  productId: String;

  constructor(private products: ProductService, private route: ActivatedRoute) {
  }

  loadProductInfo(productId: String) {
    return this.products.getProductsById(productId).subscribe(resp => {
      console.log(resp['results']);
      this.product = resp['results'];
    });
  }


  onSubmit(f: NgForm) {
    console.log(f);  // { first: '', last: '' }
  }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('product-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    // add parameter
    this.productId = this.route.snapshot.params['id'];
    this.loadProductInfo(this.productId);
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('product-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
