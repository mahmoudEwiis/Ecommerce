import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  checkoutFormGroup!: FormGroup;
  isSubmitted = false;
  cartList!: CartItem[];
  totalPrice!: number;

  constructor(
    private router: Router,
    private _cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  /*
    ----------------------------------
    ========== get CartList ==========
    ----------------------------------
  */
  getCartList() {
    this._cartService.cart$.subscribe((cart) => {
      this.cartList = cart.items!;
    });
  }

  /*
    ----------------------------------
    ======== get Total Price =========
    ----------------------------------
  */
  getTotalPrice() {
    this._cartService.cart$.subscribe((cart) => {
      this.totalPrice = 0;
      if (cart) {
        cart.items?.map((item) => {
          this.totalPrice += item.product.price! * item.quantity!;
        });
      }
    });
  }

  /*
    ----------------------------------
    ======= init Checkout Form =======
    ----------------------------------
  */
  initCheckoutForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      // city: ['', Validators.required],
      // country: ['', Validators.required],
      postalcode: ['', Validators.required],
      message: [''],
      zip: ['', Validators.required],
      house: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  /*
    ----------------------------------
    ========= Checkout Form ==========
    ----------------------------------
  */
  get checkoutForm() {
    return this.checkoutFormGroup.controls;
  }
  placeOrder() {
    this.isSubmitted = true;
    if (this.checkoutFormGroup.invalid) {
      return;
    }
    // notefication Thank you for Shopping with us!
    this.router.navigate(['/'])
    console.log(this.checkoutForm)
  }
  ngOnInit(): void {
    this.getCartList();
    this.getTotalPrice();
    this.initCheckoutForm();
  }


}
