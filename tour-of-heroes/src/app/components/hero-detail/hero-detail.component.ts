import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../../domain/hero";
import {HeroService} from "../../service/hero-service/hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
