import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

// Services
import { ProductsService } from './Services/products.service';

// Components
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
// View Components
import { HomeComponent } from './Views/home/home.component';
import { ProductDetailComponent } from './Views/product-detail/product-detail.component';
import { NavbarDetailComponent } from './Components/Shared/navbar-detail/navbar-detail.component';

//leading to error mentioned
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductDetailComponent,
    NavbarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
