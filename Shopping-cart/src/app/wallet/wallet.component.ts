import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wallet',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit, OnDestroy {

  walletBalance = 0;
  private subs: Subscription[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.subs.push(
      this.cartService.wallet$.subscribe(
        balance => this.walletBalance = balance
      )
    );
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
