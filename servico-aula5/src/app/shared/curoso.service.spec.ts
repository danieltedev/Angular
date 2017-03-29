/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurosoService } from './curoso.service';

describe('CurosoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurosoService]
    });
  });

  it('should ...', inject([CurosoService], (service: CurosoService) => {
    expect(service).toBeTruthy();
  }));
});
