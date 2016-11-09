import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2CorpTopbarRoutingModule } from './ng2-corp-topbar.routing';
import { Ng2CorpTopbarComponent } from './ng2-corp-topbar.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2CorpTopbarRoutingModule
  ],
  declarations: [Ng2CorpTopbarComponent],
  exports: [Ng2CorpTopbarComponent]
})
export class Ng2CorpTopbarModule { }
