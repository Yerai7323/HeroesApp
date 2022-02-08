import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesCardComponent } from './components/heroes-card/heroes-card.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { DelHeroeDialogComponent } from './components/del-heroe-dialog/del-heroe-dialog.component';






@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroesCardComponent,
    ImagenPipe,
    DelHeroeDialogComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ]
})
export class HeroesModule { }
