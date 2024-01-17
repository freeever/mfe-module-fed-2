import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule) }, { path: 'nav', loadChildren: () => import('./nav/nav.module').then(m => m.NavModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
