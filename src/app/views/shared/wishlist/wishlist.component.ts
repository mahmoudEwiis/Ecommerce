import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { CartItem } from '../../pages/models/cart';
import { WishItem} from '../../pages/models/wishlist';
import { CartService } from '../../pages/services/cart.service';
import { WishlistService } from '../../pages/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishCount = 0;
  opanWishList: boolean = false;
  WishItems!: WishItem[];
  cartList!: CartItem[];
  isVisable: boolean = false;
  deleteProductId!: string;
  constructor
  (
    private _wishlistService: WishlistService,
    private _cartService: CartService,
    private _toast:HotToastService

  ){}
    
  /*
    ----------------------------------
    ========= open WishList ==========
    ----------------------------------
  */
  openWishList() {
    this.opanWishList = true;
    document.body.style.overflowY ="hidden";
  }
    
  /*
    ----------------------------------
    ========= close Sidebar ==========
    ----------------------------------
  */
  closeSidebar() {
    this.opanWishList = false;
    document.body.style.overflowY ="auto";
  }
    
  /*
    ----------------------------------
    ========= get WishList ===========
    ----------------------------------
  */
  getWishList() {
    this._wishlistService.wishList$.subscribe((cart) => {
      this.WishItems = cart.items!;
    });
  }
  
  /*
    ----------------------------------
    ========= get CartList ===========
    ----------------------------------
  */
  getCartList() {
    this._cartService.cart$.subscribe((cart) => {
      this.cartList = cart.items!;
    });
  }

  /*
    ----------------------------------
    ======== delete WishItem =========
    ----------------------------------
  */
  deleteWishItem() {
    this._wishlistService.deleteWishItem(this.deleteProductId);
    this.closeCofirmModal();
    this._toast.error('Product removed from wishlist',
    {
      position: 'bottom-left'
    });
  }

  /*
    ----------------------------------
    ====== product In CartList =======
    ----------------------------------
  */
  productInCartList(product: any){
    const cartItemExist = this.cartList.find((item) => item.product.id === product.product.id);
    return cartItemExist;
  }

  /*
    ----------------------------------
    ====== add Product To Cart =======
    ----------------------------------
  */
  addProductToCart(item: any) {
    console.log(item)
    const cartItem: CartItem = {
      product: item,
      quantity: 1
    };
    this._cartService.setCartItem(cartItem);
    
    this._toast.success('Product added to cart successfully',
    {
      position: 'bottom-left'
    });
  }
  
  /*
    ----------------------------------
    ========== Cofirm Modal ==========
    ----------------------------------
  */

  openCofirmModal(productId: string) {
    this.isVisable = true;
    this.deleteProductId = productId
  }

  closeCofirmModal() {
    this.isVisable = false;
  }

  ngOnInit(): void {
    this._wishlistService.wishList$.subscribe((wishList) => {
      this.wishCount = wishList?.items?.length ?? 0;
    });
    this.getCartList();
    this.getWishList();
  }

}
