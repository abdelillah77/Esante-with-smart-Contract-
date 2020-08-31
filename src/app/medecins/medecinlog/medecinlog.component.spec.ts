import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinlogComponent } from './medecinlog.component';

describe('MedecinlogComponent', () => {
  let component: MedecinlogComponent;
  let fixture: ComponentFixture<MedecinlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
