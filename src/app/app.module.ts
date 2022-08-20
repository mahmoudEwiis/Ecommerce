import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { BaseComponent } from './views/layout/base/base.component';
import { CartService } from './views/pages/services/cart.service';
import { WishlistService } from './views/pages/services/wishlist.service';
import { WishlistComponent } from './views/shared/wishlist/wishlist.component';
import { CartComponent } from './views/shared/cart/cart.component';
import { JwtInterceptor } from './views/pages/auth/services/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    BaseComponent,
    WishlistComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HotToastModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor
  (
    private _cartService: CartService,
    private _wishlistService: WishlistService,
  )
  {
    _wishlistService.initWishlistLocalStorage();
    _cartService.initCartLocalStorage();
  }
}
