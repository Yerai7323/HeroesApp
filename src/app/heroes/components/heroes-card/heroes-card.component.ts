import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';


@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html',
  styleUrls: ['./heroes-card.component.css']
})
export class HeroesCardComponent  {

  @Input() heroe!: Heroe;


}
