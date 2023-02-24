import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart';
import { WishItem } from '../../models/wishlist';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  WishItems!: WishItem[];
  cartList!: CartItem[];
  isVisable: boolean = false;
  isWishItemsEmpty: boolean = false;
  deleteProductId!: string;

  constructor(
    private _wishlistService: WishlistService,
    private _cartService: CartService,
  ) { }
  getWishList() {
    this._wishlistService.wishList$.subscribe((cart) => {
      this.WishItems = cart.items!;
      if (this.WishItems.length == 0) this.isWishItemsEmpty = true;
      else this.isWishItemsEmpty = false;
    });
  }
 

  removeItem(id: string) {
    this.deleteProductId = id;
    this._wishlistService.deleteWishItem(this.deleteProductId);
  }


  openCofirmModal(productId: string) {
    this.isVisable = true;
    this.deleteProductId = productId
  }

  closeCofirmModal() {
    this.isVisable = false;
  }

  deleteWishItem() {
    this._wishlistService.deleteWishItem(this.deleteProductId);
    this.closeCofirmModal();
  }

  ngOnInit(): void {
    this.getWishList();
  }

}
