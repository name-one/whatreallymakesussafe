import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DATA_MODEL } from '../model/data-constructor';
import { Section, SectionType } from '../model/data-interfaces';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  public navTitles: SectionType[];

  constructor(private router: Router) {}

  public ngOnInit() {
    this.navTitles = DATA_MODEL.map((model: Section): SectionType => {
      return model.navTitle;
    });
  }

  public selectSection(navTitle: SectionType): void {
    this.router.navigate(['/detail/', navTitle]);
  }
}
