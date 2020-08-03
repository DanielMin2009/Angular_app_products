import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { ProductDetailComponent } from './Views/product-detail/product-detail.component';

const routes: Routes = [{ path: 'home', component: HomeComponent }, {}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
