import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart/cart.component';
import { ConfirmModelComponent } from './confirm-model/confirm-model.component';
import { WishlistComponent } from './wishlist/wishlist.component';



const COMPONENTS = [
    ConfirmModelComponent,
    CartComponent,
    WishlistComponent
];

@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  entryComponents: [
  ],
})
export class SharedModule {}
