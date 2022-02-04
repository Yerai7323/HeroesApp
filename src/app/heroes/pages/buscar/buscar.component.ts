import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe;
  heroeNoEncontrado: boolean = false;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  buscando() {
    this.heroesService
      .getSugerencias(this.termino)
      .subscribe((heroes) => (this.heroes = heroes));
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    console.log(event);
    if (!event.option.value) {
      this.heroeNoEncontrado = true;
    } else {
      const heroe: Heroe = event.option.value;
      this.termino = heroe.superhero;

      this.heroeSeleccionado = heroe;
      this.heroeNoEncontrado = false;
    }
  }
}
