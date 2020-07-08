import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Product, ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product',
  styleUrls: [ './product.component.scss' ],
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  readonly product$: Observable<Product>;
  readonly suggestedProducts$: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product$ = this.route.paramMap
      .pipe(
        map(params => parseInt(params.get('productId') || '', 10)),
        filter(productId => Boolean(productId)),
        switchMap(productId => this.productService.getById(productId))
      );


    this.suggestedProducts$ = this.productService.getAll();
  }
}
