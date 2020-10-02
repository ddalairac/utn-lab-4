import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpActorListadoComponent } from './pp-actor-listado.component';

describe('PpActorListadoComponent', () => {
  let component: PpActorListadoComponent;
  let fixture: ComponentFixture<PpActorListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpActorListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpActorListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
