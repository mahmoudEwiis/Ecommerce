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
  slider3Settings: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 10,
    dots: true,
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
        items: 5
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
  loremText: string = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quos aspernatur eum dolorr eprehenderit eos et libero debitis itaque voluptatem! Laudantium modi sequi, id numquam liberosed quaerat. Eligendi, ipsum!`;
  products: any = [ 
    {
      "id": 4,
      "title": "Handmade Fresh Table",
      "price": 687,
      "description": "Andy shoes are designed to keeping in...",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
      },
      "images": [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017"
      ]
    },
    {
      "id": 4,
      "title": "Handmade Fresh Table",
      "price": 687,
      "description": "Andy shoes are designed to keeping in...",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
      },
      "images": [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017"
      ]
    },
    {
      "id": 4,
      "title": "Handmade Fresh Table",
      "price": 687,
      "description": "Andy shoes are designed to keeping in...",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
      },
      "images": [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017"
      ]
    },
    {
      "id": 4,
      "title": "Handmade Fresh Table",
      "price": 687,
      "description": "Andy shoes are designed to keeping in...",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
      },
      "images": [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017"
      ]
    },
    {
      "id": 4,
      "title": "Handmade Fresh Table",
      "price": 687,
      "description": "Andy shoes are designed to keeping in...",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
      },
      "images": [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017"
      ]
    }
    ,{
      "id": 4,
      "title": "Handmade Fresh Table",
      "price": 687,
      "description": "Andy shoes are designed to keeping in...",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
      },
      "images": [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017"
      ]
    },
    {
      "id": 4,
      "title": "Handmade Fresh Table",
      "price": 687,
      "description": "Andy shoes are designed to keeping in...",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
      },
      "images": [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017"
      ]
    }
  ]

  
  constructor(
    private _productService: ProductService,
    private _cartService: CartService,
    private _route: ActivatedRoute,
    private _toast: HotToastService

  ) { }

 
  ZoomImage(event: any) {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    this.backgroundPos = `${x}% ${y}%`;
  }


  nextSlide(event: any) {
    if (event.dragging == false) {
      this.startPosition = event.data.startPosition; 
      const anyService = this.myCarousel as any;
      const carouselService = anyService.carouselService as CarouselService;
      carouselService.to(this.startPosition, 3)
    }
  }

 
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

  getCartList() {
    this._cartService.cart$.subscribe((cart) => {
      this.cartList = cart.items!;
    });
  }

  productInCartList(product: any) {
  
    const cartItemExist = this.cartList.find((item) => item.product.id === product.id);
    this.quantity = cartItemExist?.quantity || 0
    return cartItemExist;
  }

  updateCartItemQuantity(value: number, product: any, operation: string) {
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
