import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatDisplayComponent } from './sat-display.component';

describe('SatDisplayComponent', () => {
  let component: SatDisplayComponent;
  let fixture: ComponentFixture<SatDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
