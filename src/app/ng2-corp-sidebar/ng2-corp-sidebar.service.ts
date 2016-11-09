import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Ng2CorpSidebarMenu } from './ng2-corp-sidebar-menu'
import { Observable } from 'rxjs/Observable';

// Add the RxJS Observable operators we need in this app.
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Ng2CorpSidebarService {

  // private sidebarUrl: string;
  private headers: Headers;

  constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        // this.sidebarUrl = ' http://localhost:4200/assets/data/';
  }

  getSidebarMenu(jsonFileUrl: string): Observable<Ng2CorpSidebarMenu> {
        console.log('getting sidebar: ' + jsonFileUrl);

        return this.http.get(jsonFileUrl)
            .map((response: Response) => response.json() as Ng2CorpSidebarMenu);
        //    .do(data => console.log('All: ' + JSON.stringify(data)));
    }
}
