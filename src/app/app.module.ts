import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { Ng2CorpSidebarComponent } from './ng2-corp-sidebar/ng2-corp-sidebar.component';
import { Ng2CorpTopbarComponent } from './ng2-corp-topbar/ng2-corp-topbar.component';
import { Ng2CorpDesktopComponent } from './ng2-corp-desktop/ng2-corp-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    Ng2CorpSidebarComponent,
    Ng2CorpTopbarComponent,
    Ng2CorpDesktopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    Ng2CorpSidebarComponent, 
    Ng2CorpTopbarComponent, 
    Ng2CorpDesktopComponent
  ]
})
export class AppModule { }
