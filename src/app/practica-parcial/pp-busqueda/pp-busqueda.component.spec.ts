import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpBusquedaComponent } from './pp-busqueda.component';

describe('PpBusquedaComponent', () => {
  let component: PpBusquedaComponent;
  let fixture: ComponentFixture<PpBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
