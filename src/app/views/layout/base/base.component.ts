import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  isLoading?: boolean;

  constructor(private router: Router) {

    // Spinner for lazyload modules
    router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          this.isLoading = false;
        }, 1500)
      }
    });


  }
  onActivate(event:any) {
    window.scroll(0, 0);

  }
  ngOnInit(): void {
  }

}
