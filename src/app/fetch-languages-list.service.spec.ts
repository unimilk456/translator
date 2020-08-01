import { TestBed } from '@angular/core/testing';

import { FetchLanguagesListService } from './fetch-languages-list.service';

describe('FetchLanguagesListService', () => {
  let service: FetchLanguagesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchLanguagesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
