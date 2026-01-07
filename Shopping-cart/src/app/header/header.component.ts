import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.component.css'],
  imports:[CommonModule, RouterModule]
})
export class HeaderComponent {
  @Input() title: string = 'Shopping Cart';
  constructor(public cartService: CartService) {}

  getCartCount(): number {
    return this.cartService.getCart().length;
  }

  getWalletBalance(): number {
    return this.cartService.getWalletBalance();
  }
} 