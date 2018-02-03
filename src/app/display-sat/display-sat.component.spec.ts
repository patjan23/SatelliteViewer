import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySatComponent } from './display-sat.component';

describe('DisplaySatComponent', () => {
  let component: DisplaySatComponent;
  let fixture: ComponentFixture<DisplaySatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
