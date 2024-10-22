import { Component } from '@angular/core';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { CartDataService } from '../../services/cart-data.service';

@Component({
  selector: 'app-header', // you can use this in app component html
  standalone: true,
  imports: [
    MenuListComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  cartCount = 0;

  constructor(private cartDataService: CartDataService){
    this.cartDataService.$latestCartItems.subscribe((cartItems) => {
      console.log(cartItems);
      this.cartCount = cartItems.length;
    })
  }

}
