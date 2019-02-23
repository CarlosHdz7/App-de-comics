import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: any = [];
  termino: string;
  @Input() index: number;

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      // tslint:disable-next-line: no-string-literal
      this.termino = params['termino'];
      // tslint:disable-next-line: no-string-literal
      this.heroes = this.heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes.length);
    });
  }

  getHeroe( ) {
    this.router.navigate( ['/heroe', this.index] );
  }
}
