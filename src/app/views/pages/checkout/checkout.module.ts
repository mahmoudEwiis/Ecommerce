import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CheckoutCompleteComponent } from './checkout-complete/checkout-complete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: '',
        component: CheckoutPageComponent,
      },
      {
        path: 'succuss',
        component: CheckoutCompleteComponent,
      }
    ],
  }
]

@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutPageComponent,
    CheckoutCompleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }
