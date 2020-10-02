import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpDetallePeliculaComponent } from './pp-detalle-pelicula.component';

describe('PpDetallePeliculaComponent', () => {
  let component: PpDetallePeliculaComponent;
  let fixture: ComponentFixture<PpDetallePeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpDetallePeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpDetallePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
