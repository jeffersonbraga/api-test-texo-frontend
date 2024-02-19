import { TestBed } from '@angular/core/testing';

import { DashboardMultipleWinnersService } from './dashboard-multiple-winners.service';

describe('DashboardMultipleWinnersService', () => {
  let service: DashboardMultipleWinnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardMultipleWinnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
