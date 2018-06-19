import { TestBed, inject } from '@angular/core/testing';

import { TipoAvionService } from './tipo-avion.service';

describe('TipoAvionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoAvionService]
    });
  });

  it('should be created', inject([TipoAvionService], (service: TipoAvionService) => {
    expect(service).toBeTruthy();
  }));
});
