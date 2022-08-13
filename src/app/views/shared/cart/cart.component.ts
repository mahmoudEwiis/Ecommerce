import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../../pages/models/cart';
import { CartService } from '../../pages/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartCount = 0;
  totalPrice!: number;
  opanCartlist: boolean = false;
  cartList!: CartItem[]
  constructor
    (
      private router: Router,
      private _cartService: CartService,
  ) { }

  openCartlist() {
    this.getCartList();
    this.opanCartlist = true;
    document.body.style.overflowY = "hidden";
  }

  closeSidebar() {
    this.opanCartlist = false;
    document.body.style.overflowY = "auto";
  }

  getCartList() {
    this._cartService.cart$.subscribe((cart) => {
      this.cartList = cart.items!;
    });
  }

  deleteCartItem(cartItem: CartItem) {
    this._cartService.deleteCartItem(cartItem.product.id);
  }

  getOrderSummary() {
    this._cartService.cart$.subscribe((cart) => {
      this.totalPrice = 0;
      if (cart) {
        cart.items?.map((item) => {
          this.totalPrice += item.product.price! * item.quantity!;
        });
      }
    });
  }

  updateCartItemQuantity(value: number, cartItem: CartItem , operation:string) {
    if (operation == "+") {
      value++;
    } else {
      value--;
    }
    this._cartService.setCartItem(
      {
        product: cartItem.product,
        quantity: value,
      },
      true
    );
  }

  navigateToCheckout() {
    this.closeSidebar();
    this.router.navigate(['/checkout']);
  }

  ngOnInit(): void {
    this._cartService.cart$.subscribe((cart) => {
      this.cartCount = cart?.items?.length ?? 0;
    });
    this.getCartList();
    this.getOrderSummary();
  }

}
