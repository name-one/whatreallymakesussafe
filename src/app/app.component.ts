import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public breadcrumbs: string = "breadcrumbs/go/here";
  anchorLink(event){
    console.log(event)
  }
}
