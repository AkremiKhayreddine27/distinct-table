import { TestBed, inject } from '@angular/core/testing';

import { DistinctTableService } from './distinct-table.service';

describe('DistinctTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistinctTableService]
    });
  });

  it('should be created', inject([DistinctTableService], (service: DistinctTableService) => {
    expect(service).toBeTruthy();
  }));
});
