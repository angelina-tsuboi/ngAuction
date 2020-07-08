import { map, startWith } from 'rxjs/operators';
import { Component, Input } from '@angular/core';
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import { Observable } from 'rxjs';
import { Product } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.scss'],
})
export class ProductSuggestionComponent {
  @Input() products: Product[];
  @Input() specProduct: Product;
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    ['xs', 2],
    ['sm', 3],
    ['md', 5],
    ['lg', 2],
    ['xl', 3],
  ]);

  constructor(private media: MediaObserver) {
    this.columns$ = this.media.media$.pipe(
      map((mc) => this.breakpointsToColumnsNumber.get(mc.mqAlias) as number),
      startWith(3) // bug workaround
    );
  }
}
