import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpTablaPeliculaComponent } from './pp-tabla-pelicula.component';

describe('PpTablaPeliculaComponent', () => {
  let component: PpTablaPeliculaComponent;
  let fixture: ComponentFixture<PpTablaPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpTablaPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpTablaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
