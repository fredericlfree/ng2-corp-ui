import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2CorpSidebarRoutingModule } from './ng2-corp-sidebar.routing';
import { Ng2CorpSidebarComponent } from './ng2-corp-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2CorpSidebarRoutingModule
  ],
  declarations: [Ng2CorpSidebarComponent],
  exports: [Ng2CorpSidebarComponent]
})
export class Ng2CorpSidebarModule { }
