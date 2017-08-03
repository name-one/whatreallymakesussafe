// core & third party
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DetailComponent } from './detail/detail.component';

// services
import { PersonService } from './services/person.service';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { RolloverService } from './services/rollover.service';
import { NavigationService } from './services/navigation.service';
import { SplashComponent } from './splash/splash.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DetailComponent,
    DetailMenuComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {  component: SplashComponent, path: 'splash' },
      {  component: DetailComponent, path: 'detail/:id' },
      {  path: '**', pathMatch: 'full', redirectTo: 'splash' }
    ]),
  ],
  providers: [
    NavigationService,
    PersonService,
    RolloverService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
