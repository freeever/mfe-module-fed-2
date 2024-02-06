import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfeSharedLibModule } from './../../../mfe-shared/projects/mfe-shared-lib/src/lib/mfe-shared-lib.module';
import { SharedModule } from './shared/shared.module';
import { NavModule } from './nav/nav.module';
import { ProductsModule } from './views/products/products.module';
import { LoggingInterceptor } from './services/interceptors/logging.interceptor';
import { ProductServiceImpl } from './services/functional/product-impl.service';
import { ProductService } from './services/functional/product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    // SharedModule,
    NavModule,
    MfeSharedLibModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ProductsModule
  ],
  providers: [
    { provide: ProductService, useClass: ProductServiceImpl },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
