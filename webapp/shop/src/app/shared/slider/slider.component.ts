import { Component, OnInit, Input } from '@angular/core';
import { SlickModule } from 'ngx-slick';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
 @Input() title: String;

  slides = [
    {img: 'http://placehold.it/350x150/000000', href: ''},
    {img: 'http://placehold.it/350x150/111111', href: ''},
    {img: 'http://placehold.it/350x150/333333', href: ''},
    {img: 'http://placehold.it/350x150/666666', href: ''}
  ];
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

  constructor() { }

  ngOnInit() {
  }

   addSlide() {
    this.slides.push({img: 'http://placehold.it/350x150/777777', href: ''})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }
}
