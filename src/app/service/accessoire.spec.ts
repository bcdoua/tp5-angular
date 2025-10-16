import { TestBed } from '@angular/core/testing';
import{ accessoireService } from './accessoire';

describe('accessoireService', () => {
  let service: accessoireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(accessoireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});