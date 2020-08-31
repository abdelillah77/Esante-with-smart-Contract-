import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaladelogComponent } from './maladelog.component';

describe('MaladelogComponent', () => {
  let component: MaladelogComponent;
  let fixture: ComponentFixture<MaladelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaladelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaladelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
