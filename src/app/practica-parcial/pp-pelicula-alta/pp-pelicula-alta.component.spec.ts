import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpPeliculaAltaComponent } from './pp-pelicula-alta.component';

describe('PpPeliculaAltaComponent', () => {
  let component: PpPeliculaAltaComponent;
  let fixture: ComponentFixture<PpPeliculaAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpPeliculaAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpPeliculaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
