import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from 'src/app/services/interceptors/logging.interceptor';
import { ProductService } from 'src/app/services/functional/product.service';
import { ProductServiceImpl } from 'src/app/services/functional/product-impl.service';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsComponent,
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [
  ]
})
export class ProductsModule { }
