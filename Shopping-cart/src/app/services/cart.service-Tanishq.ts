import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  walletBalance = 1000;
  cart: any[] = [];

  private cartSubject = new BehaviorSubject<any[]>(this.cart);
  public cart$ = this.cartSubject.asObservable();
  public cartCount$ = this.cart$.pipe(map(items => items.length));

  private walletSubject = new BehaviorSubject<number>(this.walletBalance);
  public wallet$ = this.walletSubject.asObservable();

  products = [
    { id: 1, name: 'wallet', price: 200 },
    { id: 2, name: 'Shirt', price: 150 },
    { id: 3, name: 'shoes', price: 300 },
    { id: 4, name: 'Airbuds', price: 250 },
    { id: 5, name: 'pant', price: 120 }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  addToCart(product: any) {
    if (this.walletBalance >= product.price) {
      this.cart.push(product);
      this.cartSubject.next(this.cart);
    } else {
      alert("Not enough balance!");
    }
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    this.cartSubject.next(this.cart);
  }

  checkout() {
    const total = this.cart.reduce((sum, item) => sum + item.price, 0);

    if (total > this.walletBalance) {
      alert("Not enough balance!");
      return;
    }

    this.walletBalance -= total;
    this.walletSubject.next(this.walletBalance);

    this.cart = [];
    this.cartSubject.next(this.cart);

    alert("Purchase successful!");
  }


  getWalletBalance() {
    return this.walletBalance;
  }

  getCart() {
    return this.cart;
  }
}