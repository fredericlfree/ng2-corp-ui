import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { Ng2CorpTopbarComponent } from './ng2-corp-topbar.component';

const routes: Routes = [
    { path: '', component: Ng2CorpTopbarComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class Ng2CorpTopbarRoutingModule { }