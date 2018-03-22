import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-productslider',
  templateUrl: './productslider.component.html',
  styleUrls: ['./productslider.component.scss']
})
export class ProductsliderComponent implements OnInit {
  id: number;
  name: string;
  simpleSlider = 40;
  
  constructor() { }

  ngOnInit() {
  }

}
