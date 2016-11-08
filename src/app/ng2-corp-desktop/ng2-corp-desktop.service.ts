import { Injectable } from '@angular/core';


@Injectable()
export class Ng2CorpDesktopService {

  private sidebarUrl: string;

  constructor() { 
    this.sidebarUrl = ' http://localhost:4200/assets/images/';
  }

  getDesktopBackground(fileName: string): string {
        console.log('getting desktop background: ' + fileName);

        return this.sidebarUrl + fileName;
  }
}
