import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpPeliculaListadoComponent } from './pp-pelicula-listado.component';

describe('PpPeliculaListadoComponent', () => {
  let component: PpPeliculaListadoComponent;
  let fixture: ComponentFixture<PpPeliculaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpPeliculaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpPeliculaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
