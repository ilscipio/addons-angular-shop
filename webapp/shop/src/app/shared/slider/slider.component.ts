import { Component, OnInit } from '@angular/core';
import { SlickModule } from 'ngx-slick';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
      'slidesToShow': 4,
      'slidesToScroll': 4,
      'dots': true,
      'focusOnSelect': true,
      'arrows': true,
      'rows': 0
      };
  
  constructor() { }

  ngOnInit() {
  }

   addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }
}
