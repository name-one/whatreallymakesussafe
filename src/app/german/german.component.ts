import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-german',
  templateUrl: './german.component.html',
  styleUrls: ['./german.component.css']
})
export class GermanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.classList.remove('nav-hidden')
  }

}
