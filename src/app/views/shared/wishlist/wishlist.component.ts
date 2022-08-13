import { Component, OnInit } from '@angular/core';
import { WishItem} from '../../pages/models/wishlist';
import { WishlistService } from '../../pages/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishCount = 0;
  opanWishList: boolean = false;
  WishItems!: WishItem[]
  constructor
  (
    private _wishlistService: WishlistService,
  ){}


  openWishList() {
    this.opanWishList = true;
    document.body.style.overflowY ="hidden";
  }

  closeSidebar() {
    this.opanWishList = false;
    document.body.style.overflowY ="auto";
  }

  getCartList() {
    this._wishlistService.wishList$.subscribe((cart) => {
      this.WishItems = cart.items!;
    });
  }

  deleteWishItem(wishItem: WishItem) {
    this._wishlistService.deleteWishItem(wishItem.product.id);
  }

  ngOnInit(): void {
    this._wishlistService.wishList$.subscribe((wishList) => {
      this.wishCount = wishList?.items?.length ?? 0;
    });
    this.getCartList();
  }

}
