import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../models/cart';
import { CartService } from '../services/cart.service';
@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
})

export class CheckoutComponent implements OnInit {


    constructor() { }
    ngOnInit(): void { }

}