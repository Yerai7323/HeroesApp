import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelHeroeDialogComponent } from './del-heroe-dialog.component';

describe('DelHeroeDialogComponent', () => {
  let component: DelHeroeDialogComponent;
  let fixture: ComponentFixture<DelHeroeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelHeroeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelHeroeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
