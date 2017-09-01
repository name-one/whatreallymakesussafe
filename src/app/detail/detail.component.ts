import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';

import { DATA_MODEL, FUTURE_SECTION } from '../model/data-constructor';
import { GAME_CHANGERS_SECTION } from "../model/game-changers";
import { Section, Person, Quote } from '../model/data-interfaces';
import { PersonService } from '../services/person.service';
import { Rollover } from '../model/rollovers';
import { RolloverService } from '../services/rollover.service';
import { NavigationService } from '../services/navigation.service';
import { escape } from 'querystring';
import { getElemCoords, iCoords } from '../model/elemCoords';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, AfterViewInit {
  public futureSection: any;
  public selectedDetail: Section;
  public gameChangers = DATA_MODEL[1];
  public selectedQuote: Quote;
  public selectedRollover: Rollover;
  public pageTitle: string;
  constructor(private route: ActivatedRoute,
              private modalService: NgbModal,
              private navigationService: NavigationService,
              private personService: PersonService,
              private rolloverService: RolloverService) {}

  public ngOnInit() {
    this.route.params
      .map((params: Params): string => params['id'])
      .subscribe((sectionTitle: string): void => {
        this.navigationService.setNavigation(sectionTitle);
        this.makePageTitle(sectionTitle)
        if (document.getElementsByTagName('app-detail')[0]) {
          document.getElementsByTagName('app-detail')[0].scrollTop = 0;
        }
        for (let section of DATA_MODEL) {
          if (section.navTitle === sectionTitle) {
            this.selectedDetail = section;
            break;
          }
        }
      });

    this.futureSection = FUTURE_SECTION;
  }
  public makePageTitle(title:string){
    switch(title){
      case 'Support':
        this.pageTitle = 'Support <span class="header-small">for Survivors of Violence</span>';
        break;
      case 'Accountability':
        this.pageTitle = 'Accountability <span class="header-small">for People Causing Violence</span>';
        break;
      default:
        this.pageTitle = title;
    }
  }
  public ngAfterViewInit() {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + this.flattenFragmentId(f) );
      // console.log('fragment, ', element);
      if ( element ){
        let parentBlock = document.querySelector('app-detail')
        // this.smoothScrolling(element, parentBlock)
        element.scrollIntoView ({ block: "start", behavior: "smooth" })
      }
    });
  }

  public isBoxSection(title: string): boolean {
    return title !== 'About' && title !== 'Principles' && title !== 'Movement';
  }
  public openRollover(rollover: any, rolloverId: number): void {
    this.selectedRollover = this.rolloverService.getRolloverById(rolloverId);
    this.modalService.open(rollover,
      {backdrop: true,
        keyboard: true,
        size: 'lg',
        windowClass: 'show'}).result.then((result) => {
      console.log('Closed with: ${result}');
    }, (reason) => {
      this.selectedQuote = undefined;
      console.log('Dismissed ${this.getDismissReason(reason)}');
    });
  }

  public openQuoteModal(content: any, quote: Quote): void {
    this.selectedQuote = quote;
    this.modalService.open(content,
      {backdrop: true,
        keyboard: true,
        size: 'lg',
        windowClass: 'show'}).result.then((result) => {
      console.log('Closed with: ${result}');
    }, (reason) => {
      this.selectedQuote = undefined;
      console.log('Dismissed ${this.getDismissReason(reason)}');
    });
  }
  public showBio(id:number, content){
    let persons:any = GAME_CHANGERS_SECTION[0].quotes;
    let person = persons.find( item=>{
      return item.personId == id
    })
    this.openQuoteModal(content, person)


  }
  public openModalFromOtherPage(content: any, pageName: string, personId: number, title: string, subtitle?: string ){
      let section = DATA_MODEL.find( (item: any)=>{
        return item.navTitle == pageName;
      })
      let question = section.questions.find( (item: any)=>{
        return item.title == title;
      })
      let currentQuote;
      if(!subtitle){
        currentQuote = question.quotes.find( (item:any)=>{
         return item.personId == +personId
       })
     }else{
       currentQuote = question.quotes.find( (item:any)=>{
        return item.tagline == subtitle
      })
     }
      this.openQuoteModal(content, currentQuote);

  }
  public getPerson(personId: number): Person {
    return this.personService.getPersonById(personId);
  }

  private flattenFragmentId(fragment: string): string {
    if (!fragment) {
      return fragment;
    }
    let fragments = fragment.split(" >> ");
    if (fragments.length > 1) {
      console.log("x : ", fragments[0] + fragments[1]);
      return fragments[0].trim() + fragments[1].trim();
    } else {
      fragments = fragment.split(" & ");
      if (fragments.length > 1) {
        return fragments[0].trim() + fragments[1].trim();
      } else {
        if (fragment === 'How to Support') {
          return 'HowtoSupport';
        } else {
          if (fragment === 'The Project') {
            return 'TheProject';
          } else {
            return fragment;
          }
        }
      }
    }

  }
}
