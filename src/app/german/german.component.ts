import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-german',
  templateUrl: './german.component.html',
  styleUrls: ['./german.component.css'],
})
export class GermanComponent implements OnInit {
  currentImg : string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    document.body.classList.remove('nav-hidden')
  }
  openModal(content: any, src: string){
    this.currentImg = src;
    const modalRef = this.modalService.open(content,
      {backdrop: true,
        keyboard: true,
        size: 'lg',
        windowClass: 'show'}).result.then((result) => {
      console.log('Closed with: ${result}');
    }, (reason) => {
      this.currentImg = '';
      console.log('Dismissed ${this.getDismissReason(reason)}');
    });
  }
}
