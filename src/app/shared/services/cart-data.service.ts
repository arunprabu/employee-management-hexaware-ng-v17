import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  // Let's have some default cart items
  // then, let's make it subscribable to Header component

  // Step 1:
  private defaultCartItems: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38',
    },
  ];

  // Step 2: In order to make it subscribable to Header component
  // We need to create Observable. Observable is a type of data stream
  // It is Subject. Subject is a type of Observable. But we need default items.
  // So Let's use BehaviorSubject
  private cartItems = new BehaviorSubject<any[]>(this.defaultCartItems);

  // Step 3: Let's make it cartItems Subscribable to Header component
  $latestCartItems: Observable<any[]> = this.cartItems.asObservable(); // this is public variable available to header via dep inj

  constructor() {
    
  }

  addToCart(product: any) {
    console.log(product);
    // Let's work on adding this product to existing cart items 
    this.$latestCartItems
      .pipe(
        take(1) // Learn about take operator: https://www.learnrxjs.io/learn-rxjs/operators/filtering/take
      )
      .subscribe((existingCartItems: any[]) => {
        console.log(existingCartItems);
        const updatedCartItems = [...existingCartItems, product];
        this.cartItems.next(updatedCartItems);
      });
  }
}
