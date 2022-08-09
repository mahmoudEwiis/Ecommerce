import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  backgroundPos: string = 'center center';
  startPosition:number = 0; // Position of active Slide
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
    startPosition:this.startPosition
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

  constructor() { }
  // ZoomImage
  ZoomImage(event: any) {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    this.backgroundPos = `${x}% ${y}%`;
  }
  callback(event:any) {
    if(event.dragging == false){
      this.startPosition = event.data.startPosition; // Position of active Slide
      const anyService = this.myCarousel as any;
      const carouselService = anyService.carouselService as CarouselService;
      carouselService.to(this.startPosition,3)
    }

  }

  ngOnInit(): void {
  }

}
