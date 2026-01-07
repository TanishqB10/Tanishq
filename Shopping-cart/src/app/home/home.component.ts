import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private cartService: CartService) { }
  products = [
    { id: 1, name: 'PUMA Palermo Classic White-Blue', price: 115, image: '/image/puma-WHITEBLUE-Palermo-Og-Sneakers.jpeg' },
    { id: 2, name: 'Under Armour Curry 1 Due Nation', price: 149, image: '/image/3024397_100.png_88632ae13c1c4714_6803db6d763f43eaa783a3163beb0fc0.png' },
    { id: 3, name: 'Nike Sabrina 1 Apple Green', price: 165, image: '/image/Nike-Sabrina-1-Apple-Green-FQ3391-300-2.jpg' },
    { id: 4, name: 'Adidas Forum 84 Low CL', price: 120, image: '/image/OIP.webp' },
    { id: 5, name: 'New Balance 9060 “Chrome Blue”', price: 150, image: '/image/New-Balance-9060-Chrome-Blue-Elemental-Blue-U9060EED-1.jpg' },
  ];

  addItem(product: any) {
    this.cartService.addToCart(product);
  }

}
