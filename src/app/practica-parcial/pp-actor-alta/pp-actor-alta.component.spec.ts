import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpActorAltaComponent } from './pp-actor-alta.component';

describe('PpActorAltaComponent', () => {
  let component: PpActorAltaComponent;
  let fixture: ComponentFixture<PpActorAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpActorAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpActorAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
