import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMaladeComponent } from './ajouter-malade.component';

describe('AjouterMaladeComponent', () => {
  let component: AjouterMaladeComponent;
  let fixture: ComponentFixture<AjouterMaladeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterMaladeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
