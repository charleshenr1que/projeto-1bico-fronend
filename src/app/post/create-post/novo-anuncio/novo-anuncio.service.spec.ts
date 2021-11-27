import { TestBed } from '@angular/core/testing';

import { NovoAnuncioService } from './novo-anuncio.service';

describe('NovoAnuncioService', () => {
  let service: NovoAnuncioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoAnuncioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
