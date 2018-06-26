import { Component, OnInit, Input } from '@angular/core';
import { SlickModule } from 'ngx-slick';
import { ProductService } from '../services/products.services';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-productslider',
  templateUrl: './productslider.component.html',
  styleUrls: ['./productslider.component.scss'],
  providers: [ProductService]
})
export class ProductSliderComponent implements OnInit {

  @Input() productcategoryid: String;
  @Input() title: String;

  slides = [];
  slideConfig = {
      'slidesToShow': 4,
      'slidesToScroll': 4,
      'dots': true,
      'focusOnSelect': true,
      'arrows': true,
      'rows': 0,
      autoplay: true,
      autoplaySpeed: 2000
      };

  constructor(private products: ProductService) {
  }

  ngOnInit() {
         this.loadProduct();

  }

  loadProduct() {
    // console.log('CategoryId is set to: ', this.productcategoryid)
    return this.products.getProductsByCategory(this.productcategoryid).subscribe(resp => {
      // console.log(resp['results']);
      this.slides = resp['results'];
    });
  }

  afterChange(e) {
    // console.log('afterChange');
  }
}
