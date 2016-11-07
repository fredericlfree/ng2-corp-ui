import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Ng2CorpSidebarService } from '../ng2-corp-sidebar/ng2-corp-sidebar.service';
import { Ng2CorpSidebarMenu } from '../ng2-corp-sidebar/ng2-corp-sidebar-menu';

@Component({
  selector: 'ng2-corp-topbar',
  templateUrl: './ng2-corp-topbar.component.html',
  providers: [Ng2CorpSidebarService],
  styleUrls: ['./ng2-corp-topbar.component.css']
})
export class Ng2CorpTopbarComponent implements OnInit {

  errorMessage: string;
  model: Ng2CorpSidebarMenu;
  //structure: string;    
  sub: any;

  constructor(
        private sidebarService: Ng2CorpSidebarService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        if (!this.model) {
            this.loadSidebar();
        }
    }

    loadSidebar() {
        this.sub = this.route.params.subscribe(params => {
            let id = 2;
            this.getSidebarMenu(Number(id));
        });
    }

    getSidebarMenu(id: number) {
        this.sidebarService.getSidebarMenu(id)
            .subscribe(
            model => {
                this.model = model[0];
            },
            error => this.errorMessage = <any>error);
    }  

}
