import { TestBed, inject } from '@angular/core/testing';

import { ShowparameterService } from './showparameter.service' ;


describe('ShowparameterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowparameterService]
    });
  });

  it('should be created', inject([ShowparameterService], (service: ShowparameterService) => {
    expect(service).toBeTruthy();
  }));
});
