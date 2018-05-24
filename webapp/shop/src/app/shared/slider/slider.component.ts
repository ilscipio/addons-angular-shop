import { Component, OnInit } from '@angular/core';
import { SlickModule } from 'ngx-slick';
import { ProductService } from '../services/products.services';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [ProductService]
})
export class SliderComponent implements OnInit {

  slides = [];
  slideConfig = {
      'slidesToShow': 4,
      'slidesToScroll': 1,
      'dots': true,
      'focusOnSelect': true,
      'arrows': true,
      'rows': 0,
      autoplay: true,
      autoplaySpeed: 2000
      };

  constructor(private products: ProductService) { }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    return this.products.getProducts('ELTRN-100').subscribe(resp => {
      console.log(resp);
      this.slides = resp.results;
    });
  }

  afterChange(e) {
    console.log('afterChange');
  }
}
