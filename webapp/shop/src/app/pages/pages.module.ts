import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';

import { ProductPageComponent } from './product/product.component';
import { CategoryPageComponent } from './category/category.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule
    ],
    declarations: [
        ProductPageComponent,
        CategoryPageComponent
    ]
})
export class PagesModule { }
