import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnDestroy {
  walletBalance = 0;
  cartItems: any[] = [];
  private subs: Subscription[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.walletBalance = this.cartService.getWalletBalance();
    this.cartItems = this.cartService.getCart();

    this.subs.push(this.cartService.cart$.subscribe(items => this.cartItems = items));
    this.subs.push(this.cartService.wallet$.subscribe(b => this.walletBalance = b));
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  checkout() {
    this.cartService.checkout();
  }

  getTotal() {
    return this.cartItems.reduce((s, it) => s + it.price, 0);
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}