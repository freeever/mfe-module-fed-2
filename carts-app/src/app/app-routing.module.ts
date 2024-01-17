import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'carts', loadChildren: () => import('./carts/carts.module').then(m => m.CartsModule) }, { path: 'nav', loadChildren: () => import('./nav/nav.module').then(m => m.NavModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
