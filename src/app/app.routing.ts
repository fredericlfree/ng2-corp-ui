import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { AppComponent } from './app.component';
import { Ng2CorpDesktopComponent } from './ng2-corp-desktop/ng2-corp-desktop.component';


const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'desktop/:backgroundImageUrl', component: Ng2CorpDesktopComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }