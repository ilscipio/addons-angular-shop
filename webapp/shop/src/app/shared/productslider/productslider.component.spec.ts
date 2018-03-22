import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsliderComponent } from './productslider.component';

describe('ProductsliderComponent', () => {
  let component: ProductsliderComponent;
  let fixture: ComponentFixture<ProductsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
