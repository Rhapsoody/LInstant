import { TestBed } from '@angular/core/testing';

import { ToolingService } from './tooling.service';

describe('ToolingService', () => {
  let service: ToolingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
