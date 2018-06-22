import { TestBed, inject } from '@angular/core/testing';

import { TipoClaseService } from './tipo-clase.service';

describe('TipoClaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoClaseService]
    });
  });

  it('should be created', inject([TipoClaseService], (service: TipoClaseService) => {
    expect(service).toBeTruthy();
  }));
});
