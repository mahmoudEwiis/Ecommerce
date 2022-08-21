import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  backgroundPos: string = 'center center';
  startPosition: number = 0; // Position of active Slide
  @ViewChild("myCarousel") myCarousel!: ElementRef;  // slider One Big Image
  slider1Settings: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
    startPosition: this.startPosition
  }
  slider2Settings: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 10,
    dots: false,
    navSpeed: 700,
    center: true,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false,
    // animateOut: 'slideOutUp',
    // animateIn: 'slideInUp'
  }
  product: any
  productId!: number
  imgNotFounded: boolean = false;
  cartList!: CartItem[];
  quantity!: number
  constructor(
    private _productService: ProductService,
    private _cartService: CartService,
    private _route: ActivatedRoute,
    private _toast: HotToastService

  ) { }

  // ZoomImage
  ZoomImage(event: any) {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    this.backgroundPos = `${x}% ${y}%`;
  }

  // next Slide {{slider2}}
  nextSlide(event: any) {
    if (event.dragging == false) {
      this.startPosition = event.data.startPosition; // Position of active Slide
      const anyService = this.myCarousel as any;
      const carouselService = anyService.carouselService as CarouselService;
      carouselService.to(this.startPosition, 3)
    }
  }

  // get Single Product
  getproduct() {
    this._route.params.subscribe(params => {
      this.productId = params['id'];
    });
    this._productService.getSingleProduct(this.productId).subscribe((data) => {
      this.product = data;
      console.log(data)
      if (data.images.length == 1) {
        this.imgNotFounded = true
      }
    })
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
    ====== product In CartList =======
    ----------------------------------
  */
  productInCartList(product: any) {
    // return true
    const cartItemExist = this.cartList.find((item) => item.product.id === product.id);
    this.quantity = cartItemExist?.quantity || 0
    return cartItemExist;
  }

  /*
    ----------------------------------
    ==== update CartItem Quantity ====
    ----------------------------------
  */
  updateCartItemQuantity(value: number, product:any, operation: string) {
    if (operation == "+") {
      value++;
    } else {
      value--;
    }
    this._cartService.setCartItem(
      {
        product: product,
        quantity: value,
      },
      true
    );
  }

  /*
    ----------------------------------
    ====== add Product To Cart =======
    ----------------------------------
  */
    addProductToCart(item: any) {
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
  ngOnInit(): void {
    this.getproduct();
    this.getCartList();
  }

}
