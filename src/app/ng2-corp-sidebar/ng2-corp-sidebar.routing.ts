import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { Ng2CorpSidebarComponent } from './ng2-corp-sidebar.component';

const routes: Routes = [
    { path: '', component: Ng2CorpSidebarComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class Ng2CorpSidebarRoutingModule { }