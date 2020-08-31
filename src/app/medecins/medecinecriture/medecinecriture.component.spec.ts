import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinecritureComponent } from './medecinecriture.component';

describe('MedecinecritureComponent', () => {
  let component: MedecinecritureComponent;
  let fixture: ComponentFixture<MedecinecritureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinecritureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinecritureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
