import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinlectureComponent } from './medecinlecture.component';

describe('MedecinlectureComponent', () => {
  let component: MedecinlectureComponent;
  let fixture: ComponentFixture<MedecinlectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinlectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinlectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
