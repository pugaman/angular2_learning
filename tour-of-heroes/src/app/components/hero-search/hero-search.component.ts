import { Component, OnInit } from '@angular/core';
import {HeroSearchService} from "../../service/hero-search/hero-search.service";
import {Router} from "@angular/router";
import {Hero} from "../../domain/hero";
import {Observable, Subject} from "rxjs/Rx";

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroSearchService: HeroSearchService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      })
  }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  goToDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
