import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';

import { DATA_MODEL } from '../model/data-constructor';
import { Section, Person, Quote } from '../model/data-interfaces';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public selectedDetail: Section;
  public selectedQuote: Quote;

  constructor(private route: ActivatedRoute,
              private modalService: NgbModal,
              private personService: PersonService) {}

  public ngOnInit() {
    this.route.params
      .map((params: Params): string => params['id'])
      .subscribe((sectionTitle: string): void => {
        for (let section of DATA_MODEL) {
          if (section.navTitle === sectionTitle) {
            this.selectedDetail = section;
            break;
          }
        }
      });
  }

  public openQuoteModal(content: any, quote: Quote) {
    this.selectedQuote = quote;
    this.modalService.open(content,
      {backdrop: true,
       keyboard: true,
       size: 'lg',
       windowClass: 'show'}).result.then((result) => {
      console.log('Closed with: ${result}');
    }, (reason) => {
      console.log('Dismissed ${this.getDismissReason(reason)}');
    });

  }

  public getPerson(personId: number): Person {
    return this.personService.getPersonById(personId);
  }
}
