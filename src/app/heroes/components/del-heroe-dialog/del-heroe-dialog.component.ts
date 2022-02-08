import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-del-heroe-dialog',
  templateUrl: './del-heroe-dialog.component.html',
  styleUrls: ['./del-heroe-dialog.component.css'],
})
export class DelHeroeDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DelHeroeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe
  ) {}

  ngOnInit(): void {}

  borrar() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close();
  }
}
