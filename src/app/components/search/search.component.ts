import { Component, OnInit } from '@angular/core';
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

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes.length);
    });
  }

  getHeroe( idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }
}
