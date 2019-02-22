import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe( params => {
        this.heroe = this.heroesService.getHeroe( params['id'] );
    });
  }

  getHeroes() {
    this.router.navigate( ['/heroes'] );
  }
}
