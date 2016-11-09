import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Ng2CorpDesktopService } from './ng2-corp-desktop.service';

@Component({
  selector: 'ng2-corp-desktop',
  templateUrl: './ng2-corp-desktop.component.html',
  styleUrls: ['./ng2-corp-desktop.component.css']  
})
export class Ng2CorpDesktopComponent implements OnInit {
  
  @Input() backgroundImageUrl: string;
        
  sub: any;

  constructor( 
    private router: Router,
    private route: ActivatedRoute ) {    
  }

  ngOnInit() {
        if (!this.backgroundImageUrl) {
          this.loadDesktopBackground();
        }        
  }

  loadDesktopBackground() {
        this.sub = this.route.params.subscribe(params => {
            if(params['backgroundImageUrl'])
            {
              let imgUrl = params['backgroundImageUrl'];
              this.backgroundImageUrl = imgUrl;
            }
        });
  }

}
