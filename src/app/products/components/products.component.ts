import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartDataService } from '../../shared/services/cart-data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  template: `
    <div class="container-fluid">
      <h1>Products</h1>
      <div class="col">
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-3 mb-3"
            *ngFor="let product of products"
          >
            <div class="card">
              <img
                class="card-img-top"
                src="https://dummyimage.com/300x220/55595c/fff"
                alt="Card image cap"
              />

              <div class="card-body">
                <h4 class="card-title">
                  <a
                    routerLink="/products/{{ product.id }}"
                    title="View Product"
                    >{{ product.name }}</a
                  >
                </h4>
                <p class="card-text">Category: {{ product.category }}</p>
                <div class="row">
                  <div class="col">
                    <p>{{ product.price }}</p>
                  </div>
                  <div class="col">
                    <button
                      class="btn btn-success btn-block"
                      (click)="handleAddToCart(product)"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductsComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Apple',
      category: 'Fruits',
      price: '$2.76',
    },
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38',
    },
    {
      id: 3,
      name: 'Orange',
      category: 'Fruits',
      price: '$4.85',
    },
    {
      id: 4,
      name: 'Tomato',
      category: 'Vegetables',
      price: '$5.01',
    },
    {
      id: 5,
      name: 'Table Cloth',
      category: 'Kitchen Essentials',
      price: '$6.13',
    },
  ];

  constructor(private cartDataService: CartDataService) {}

  handleAddToCart(product: any) {
    // console.log(product);
    // we should  send the product to the service -- cart-data.service.ts
    this.cartDataService.addToCart(product);
  }
}
