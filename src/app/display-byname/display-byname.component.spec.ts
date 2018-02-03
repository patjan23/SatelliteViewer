import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBynameComponent } from './display-byname.component';

describe('DisplayBynameComponent', () => {
  let component: DisplayBynameComponent;
  let fixture: ComponentFixture<DisplayBynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
