import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroService} from "./service/hero-service/hero.service";
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing.module";
import {InMemoryWebApiModule} from "angular-in-memory-web-api/index";
import {InMemoryDataService} from "./service/in-memory-data-service/in-memory-data.service";
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import {HeroSearchService} from "./service/hero-search/hero-search.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    HeroService,
    HeroSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
