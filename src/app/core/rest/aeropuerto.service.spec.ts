import { TestBed, inject } from '@angular/core/testing';

import { AeropuertoService } from './aeropuerto.service';

describe('AeropuertoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AeropuertoService]
    });
  });

  it('should be created', inject([AeropuertoService], (service: AeropuertoService) => {
    expect(service).toBeTruthy();
  }));
});
