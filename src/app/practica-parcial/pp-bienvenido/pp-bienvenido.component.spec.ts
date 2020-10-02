import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpBienvenidoComponent } from './pp-bienvenido.component';

describe('PpBienvenidoComponent', () => {
  let component: PpBienvenidoComponent;
  let fixture: ComponentFixture<PpBienvenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpBienvenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpBienvenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
