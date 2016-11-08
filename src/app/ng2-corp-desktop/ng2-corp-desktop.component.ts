import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Ng2CorpDesktopService } from './ng2-corp-desktop.service';

@Component({
  selector: 'ng2-corp-desktop',
  templateUrl: './ng2-corp-desktop.component.html',
  providers: [Ng2CorpDesktopService],
  styleUrls: ['./ng2-corp-desktop.component.css']  
})
export class Ng2CorpDesktopComponent implements OnInit {
  
  @Input() backgroundImageName: string;
  backgroundImageUrl : string;
      
  sub: any;

  constructor( 
    private desktopService: Ng2CorpDesktopService,
    private router: Router,
    private route: ActivatedRoute ) {    
  }

  ngOnInit() {
        if (!this.backgroundImageName) {
          this.backgroundImageName = 'background1.jpg';
        }
        this.loadDesktop();        
  }

  loadDesktop() {
        this.sub = this.route.params.subscribe(params => {
            if(params['bgimage'])
            {
              let imgName = params['bgimage'];
              this.backgroundImageName = imgName;
            }
            this.getDesktopBackground(String(this.backgroundImageName));
        });
  }
        
  getDesktopBackground(fileName: string) {
        this.backgroundImageUrl = this.desktopService.getDesktopBackground(fileName);            
  }

}
