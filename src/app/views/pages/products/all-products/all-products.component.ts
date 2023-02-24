import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart';
import { WishItem } from '../../models/wishlist';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { ProductService } from '../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: any[] = [];
  PageNumber: number = 1;
  numberOfPages: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  isFavourite: boolean = false;
  WishItems!: WishItem[];
  fliterValue: string = "Default";
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20]
  Loading: boolean = false;

  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  limit: number = 20;
  constructor(
    private _product: ProductService,
    private _cartService: CartService,
    private _wishlistService: WishlistService,
    private _toast: HotToastService
  ) { }


  getAllProducts(offset: number, limit: number) {
    this.Loading = true;
    this._product.getProduct(offset, limit).subscribe((data) => {

      setTimeout(() => {
        this.products = [...this.products, ...data]
        this.Loading = false;
      }, 4000);
    })

    // if (number == 1) {
    //   this._product.getProduct(0).subscribe((data) => {
    //     this.products = data
    //   })
    // } else {
    //   this._product.getProduct(number * 20).subscribe((data) => {
    //     this.products = data
    //   })
    // }
    // window.scroll(0, 500);
    // this.PageNumber = number;
  }

  // nextPage() {
  //   if (this.PageNumber == 9) {
  //     this.PageNumber = 1;
  //   } else {
  //     this.PageNumber++;
  //   }
  //   this.getAllProducts(this.PageNumber);

  // }


  // provPage() {
  //   if (this.PageNumber == 1) {
  //     this.PageNumber = 9;
  //   } else {
  //     this.PageNumber--;
  //   }
  //   this.getAllProducts(this.PageNumber);

  // }


  addProductToCart(item: any) {
    const cartItem: CartItem = {
      product: item,
      quantity: 1
    };
    this._cartService.setCartItem(cartItem);
    this._toast.success('Product added to cart successfully',
      {
        position: 'top-left'
      });

  }

  addProductToWishList(item: any, event: any) {
    const WishItem: WishItem = {
      product: item
    };
    if (event.currentTarget.classList.contains("is-favourite")) {
      event.currentTarget.classList.remove("is-favourite")
      this._wishlistService.deleteWishItem(WishItem.product.id);
      this._toast.error('Product removed from wishlist',
        {
          position: 'top-left'
        });
    }
    else {
      event.currentTarget.classList.add("is-favourite")
      this._wishlistService.setWishItem(WishItem);
      this._toast.success('Product added to wishlist successfully',
        {
          position: 'top-left'
        });
    }

  }

  productInWishList(itm: any) {
    const cartItemExist = this.WishItems.find((item) => item.product.id === itm.id);
    return cartItemExist;
  }

  getWishList() {
    this._wishlistService.wishList$.subscribe((cart) => {
      this.WishItems = cart.items!;
    });
  }


  onScroll() {
    const offset = this.limit;
    this.limit = (this.limit + 20) == 178 || (this.limit + 20) > 178 ? 178 : this.limit + 20;
    if(this.limit !== 178 ) this.getAllProducts(Math.floor(offset), Math.floor(this.limit));
  }

  ngOnInit(): void {
    this.getAllProducts(0, this.limit);
    this.getWishList();
  }


}
