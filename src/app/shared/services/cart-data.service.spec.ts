import { TestBed } from '@angular/core/testing';

import { CartDataService } from './cart-data.service';

describe('CartDataServiceTsService', () => {
  let service: CartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
