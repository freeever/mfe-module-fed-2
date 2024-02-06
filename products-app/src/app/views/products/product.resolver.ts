import { ProductService } from 'src/app/services/functional/product.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductServiceImpl } from 'src/app/services/functional/product-impl.service';

@Injectable({ 
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Observable<any>> {
  constructor(private productService: ProductServiceImpl) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>{
    console.log("Retriveing products data using ProductResolver...");
    
    return this.productService.getProducts();
  }
}
