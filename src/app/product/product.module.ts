import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProductComponent } from '../product/product.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { ProductSuggestionComponent } from '../product/product-suggestion/product-suggestion.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [ProductComponent, ProductDetailComponent, ProductSuggestionComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {path: '', component: ProductComponent}
    ]),
    MatButtonModule
  ]
})
export class ProductModule { }
