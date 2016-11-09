import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Ng2CorpSidebarService } from './ng2-corp-sidebar.service';
import { Ng2CorpSidebarMenu } from './ng2-corp-sidebar-menu';

@Component({
  selector: 'ng2-corp-sidebar',
  templateUrl: './ng2-corp-sidebar.component.html',
  providers: [Ng2CorpSidebarService],
  styleUrls: ['./ng2-corp-sidebar.component.css']
})
export class Ng2CorpSidebarComponent implements OnInit {

  @Input() top: number;
  @Input() jsonFileUrl: string;
  errorMessage: string;
  model: Ng2CorpSidebarMenu;
  // structure: string;    
  sub: any;

  constructor(
        private sidebarService: Ng2CorpSidebarService,
        private router: Router,
        private route: ActivatedRoute
        ) { }

  ngOnInit() {
        if (!this.model) {
            this.loadSidebar();
        }
  }

  loadSidebar() {
        this.sub = this.route.params.subscribe(params => {            
            this.getSidebarMenu();
        });
  }
        
  getSidebarMenu() {
        this.sidebarService.getSidebarMenu(this.jsonFileUrl)
            .subscribe(
            model => {
                this.model = model[0];
            },
            error => this.errorMessage = <any>error);
  }
}
