import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable({ 
//   providedIn: 'root'
// })
export abstract class ProductService {
  abstract getProducts(): Observable<any>;
}