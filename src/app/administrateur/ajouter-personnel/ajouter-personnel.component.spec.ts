import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPersonnelComponent } from './ajouter-personnel.component';

describe('AjouterPersonnelComponent', () => {
  let component: AjouterPersonnelComponent;
  let fixture: ComponentFixture<AjouterPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
