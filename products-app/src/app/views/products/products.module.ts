import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from 'src/app/services/interceptors/logging.interceptor';
import { ProductService } from 'src/app/services/functional/product.service';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductService,
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ]
})
export class ProductsModule { }
