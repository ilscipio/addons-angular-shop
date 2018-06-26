import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { ProductSliderComponent } from '../shared/productslider/productslider.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalBasic } from './modal/modal.component';
import { SlickModule } from 'ngx-slick';
import { SliderComponent } from '../shared/slider/slider.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JWBootstrapSwitchModule,
        // Plugins
        SlickModule.forRoot()
      ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NotificationComponent,
        NgbdModalBasic,
        ProductSliderComponent,
        SliderComponent
    ],
    exports: [ ComponentsComponent ]
})
export class ComponentsModule { }
