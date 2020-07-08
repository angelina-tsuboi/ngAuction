import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ProductGuard } from './product/product.guard';


export const routes: Routes = [
  {path: '', loadChildren: () => import ('./home/home.module').then(mod => mod.HomeModule)},
  {path: 'products/:productId', loadChildren: () => import ('./product/product.module').then(mod => mod.ProductModule),
  canActivate: [ProductGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
