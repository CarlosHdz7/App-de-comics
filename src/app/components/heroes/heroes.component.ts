import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];


  constructor( private heroesService: HeroesService, private router: Router) {

  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    // console.log(this.heroes);
  }

  getHeroe( idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

  buscarHeroes(termino: string): Heroe[] {
    const heroesArr: Heroe[] = [];
    termino = termino.toLocaleLowerCase();

    for (let heroe of this.heroes) {
      const nombre = heroe.nombre.toLowerCase();
      if (nombre.indexOf( termino ) >= 0) {
        heroesArr.push(heroe);
      }
    }

    return heroesArr;
  }
}
