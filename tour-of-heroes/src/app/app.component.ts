import {Component, OnInit} from '@angular/core';
import {HeroService} from "./service/hero-service/hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
