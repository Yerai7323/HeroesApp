import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DelHeroeDialogComponent } from '../../components/del-heroe-dialog/del-heroe-dialog.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  edicion: boolean = false;

  creadores = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    characters: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.edicion = true;
      this.activatedRoutes.params
        .pipe(switchMap(({ id }) => this.heroesService.getHeroesById(id)))
        .subscribe((heroe) => (this.heroe = heroe));
    }
  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      //actualizar
      this.heroesService.editarHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes']);
        this.openSnackBar(`Heroe ${heroe.superhero} actualizado.`);
      });
    } else {
      //crear
      this.heroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.openSnackBar(`Heroe ${heroe.superhero} añadido.`);
      });
    }
  }

  borrar() {
    const dialog = this.dialog.open(DelHeroeDialogComponent, {
      data: { ...this.heroe },
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.heroesService.borrarHeroe(this.heroe.id!).subscribe((resp) => {
          this.router.navigate(['/heroes']);
          this.openSnackBar(`Heroe ${this.heroe.superhero} eliminado.`);
        });
      }
    });
  }

  openSnackBar(mensaje: string) {
    this.snackbar.open(mensaje, 'Ok!', {
      duration: 2500,
    });
  }
}
