import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaladesComponent } from './malades.component';

describe('MaladesComponent', () => {
  let component: MaladesComponent;
  let fixture: ComponentFixture<MaladesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaladesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
