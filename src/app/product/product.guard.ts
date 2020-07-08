import { ProductService, Product } from '../shared/services/product.service';
import { Observable } from 'rxjs';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductGuard implements CanActivate {
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}
  canActivate(destination: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // A call to the actual login service would go here
    // For now we'll just randomly return true or false
    let loggedIn = true;
    let productId = destination.params.get('productId');
    const specProduct: Observable<Product> = this.productService.getById(productId);

    if(specProduct == undefined){
      loggedIn = false;
    }
    if (!loggedIn) {
      alert("You're not logged in and will be redirected to Login page");
      this.router.navigate(['/']);
    }
    return loggedIn;
  }
}
