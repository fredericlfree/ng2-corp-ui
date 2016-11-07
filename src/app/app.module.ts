import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2CorpSidebarComponent } from './ng2-corp-sidebar/ng2-corp-sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    Ng2CorpSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [Ng2CorpSidebarComponent]
})
export class AppModule { }
