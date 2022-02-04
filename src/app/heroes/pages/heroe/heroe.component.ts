import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  
  heroe!: Heroe;

  constructor(
    private activatedroute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedroute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroesById(id) )
    )
    .subscribe( heroe => this.heroe = heroe );
  }

  volverListado() {
    this.router.navigate(['/heroes/listado']);
  }
}
