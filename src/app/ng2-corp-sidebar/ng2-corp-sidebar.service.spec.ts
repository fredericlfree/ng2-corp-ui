/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Ng2CorpSidebarService } from './ng2-corp-sidebar.service';

describe('Service: Ng2CorpSidebar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng2CorpSidebarService]
    });
  });

  it('should ...', inject([Ng2CorpSidebarService], (service: Ng2CorpSidebarService) => {
    expect(service).toBeTruthy();
  }));
});
