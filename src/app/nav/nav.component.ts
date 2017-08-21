import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DATA_MODEL } from '../model/data-constructor';
import { Section, SectionType, DetailMenuSection } from '../model/data-interfaces';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  public nav: Nav[] = [];
  public routerBase: string;
  public selectedNavId = 0;

  constructor(private navigationService: NavigationService,
              public router: Router) {
                this.router.events.subscribe(e=>{
                  if(e.constructor.name === "NavigationStart" && (e['url'] === '/splash' || e['url'] === '/de')){
                    this.routerBase = 'splash'
                  }
                })
              }

  public ngOnInit() {
    let i = 0;
    DATA_MODEL.forEach((model: Section): void => {
      this.nav.push({ id: i, menu: model.menu, title: model.navTitle });
      i++;
    });

    this.navigationService.navigation$.subscribe((sectionTitle: string): void => {
      this.routerBase = this.router.routerState.snapshot.url.split('#')[0];
      this.nav.forEach((nav: Nav): void => {
        if (nav.title === sectionTitle) {
          this.selectedNavId = nav.id;
        }
      })
    });
  }

  public selectSection(navId: number, navTitle: string): void {
    let pageAddress = location.href;
    console.log(pageAddress)
    if (navId !== this.selectedNavId || pageAddress.indexOf('plash') != -1) {
      console.log('in here');
      this.router.navigate(['/detail/', navTitle]).then(() => {
        this.routerBase = this.router.routerState.snapshot.url.split('#')[0];
      });
      this.selectedNavId = navId;
    }
  }
}

interface Nav {
  id: number;
  title: string;
  menu: DetailMenuSection[];
}
