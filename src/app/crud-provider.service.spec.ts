import { TestBed } from '@angular/core/testing';

import { CrudProviderService } from './crud-provider.service';

describe('CrudProviderService', () => {
  let service: CrudProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
