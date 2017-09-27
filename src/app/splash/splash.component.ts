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
    document.body.classList.toggle('nav-hidden')
    if(window.innerWidth <= 1200){
      let nav = document.getElementsByTagName('app-nav')[0];
      nav.classList.toggle('nav_visible');
      return false;
    }

    this.subtitle = !this.subtitle;
  }
  public hideNav(){
    document.body.classList.add('nav-hidden', 'splash')
  }
  ngOnInit(){
    this.hideNav()
  }
}
