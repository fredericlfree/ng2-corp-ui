/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Ng2CorpDesktopService } from './ng2-corp-desktop.service';

describe('Service: Ng2CorpDesktop', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng2CorpDesktopService]
    });
  });

  it('should ...', inject([Ng2CorpDesktopService], (service: Ng2CorpDesktopService) => {
    expect(service).toBeTruthy();
  }));
});
