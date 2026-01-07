import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'wallet',
        component: WalletComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    },
];