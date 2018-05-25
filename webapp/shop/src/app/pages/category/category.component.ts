import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { ProductService } from 'app/shared/services/products.services';
import { ActivatedRoute } from '@angular/router';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-category-page',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [ProductService]
})

export class CategoryPageComponent implements OnInit {
  data: Date = new Date();
  products: [];
  categoryId: String;

  constructor(private catService: ProductService, private route: ActivatedRoute) {
  }

  loadCategoryInfo(categoryId: String) {
    return this.catService.getProductsByCategory(categoryId).subscribe(resp => {
      console.log(resp['results']);
      this.products = resp['results'];
    });
  }


  onSubmit(f: NgForm) {
    console.log(f);  // { first: '', last: '' }
  }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('category-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    // add parameter
    this.categoryId = this.route.snapshot.params['id'];
    this.loadCategoryInfo(this.categoryId);
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('category-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
