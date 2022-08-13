import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart';
import { WishItem } from '../../models/wishlist';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: any[] = [];
  PageNumber: number = 1;
  numberOfPages: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  isFavourite:boolean=false
  constructor(
    private _product: ProductService,
    private _cartService: CartService,
    private _wishlistService: WishlistService,
    ){}
  
  // get Page
  getAllProducts(number: number)
  {
    if (this.PageNumber == 1) {
      this._product.getProduct(0).subscribe((data) => {
        this.products = data
      })
    } else {
      this._product.getProduct(number * 20).subscribe((data) => {
        this.products = data
      })
    }

    this.PageNumber = number;
  }

  // get Next Page
  nextPage()
  {
    if (this.PageNumber == 10) {
      this.PageNumber = 1;
    } else {
      this.PageNumber++;
    }
    this.getAllProducts(this.PageNumber);
  }

  // get Provous Page
  provPage() {
    if (this.PageNumber == 1) {
      this.PageNumber = 10;
    } else {
      this.PageNumber--;
    }
    this.getAllProducts(this.PageNumber);
  }
  
  addProductToCart(item:any) {
    const cartItem: CartItem = {
      product: item,
      quantity: 1
    };
    this._cartService.setCartItem(cartItem);
  }
  
  // add To Wish List
  addProductToWishList(item:any){
    const WishItem: WishItem = {
      product: item
    };
    this._wishlistService.setWishItem(WishItem);
  }

  ngOnInit(): void {
    this.getAllProducts(this.PageNumber)
  }


}
