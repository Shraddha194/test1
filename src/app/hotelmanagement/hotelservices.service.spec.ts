import { TestBed } from '@angular/core/testing';

import { HotelservicesService } from './hotelservices.service';

describe('HotelservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelservicesService = TestBed.get(HotelservicesService);
    expect(service).toBeTruthy();
  });
});
