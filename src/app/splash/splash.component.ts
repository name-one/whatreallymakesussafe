import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  subtitle: boolean= false;
  constructor(private router: Router) { }

  public goHome() {
    this.router.navigate(['/detail/About']);
  }
  public goGermHome(){
    this.router.navigate(['/de']);
  }
  public showNav(){
    if(window.innerWidth >= 1200){
      return false;
    }
    document.body.classList.toggle('nav-hidden')
    this.subtitle = !this.subtitle;
  }
  public hideNav(){
    document.body.classList.add('nav-hidden')
  }
  ngOnInit(){
    this.hideNav()
  }
}
