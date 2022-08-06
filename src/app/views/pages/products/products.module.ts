import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        redirectTo: 'Products',
        pathMatch: 'full',
      },
      {
        path: 'Products',
        component: AllProductsComponent,
      },
      {
        path: 'Products-details',
        component: ProductDetailsComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(routes),
  ]
})

export class ProductsModule { }
