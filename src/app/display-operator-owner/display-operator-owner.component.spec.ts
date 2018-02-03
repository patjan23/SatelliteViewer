import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOperatorOwnerComponent } from './display-operator-owner.component';

describe('DisplayOperatorOwnerComponent', () => {
  let component: DisplayOperatorOwnerComponent;
  let fixture: ComponentFixture<DisplayOperatorOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOperatorOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOperatorOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
