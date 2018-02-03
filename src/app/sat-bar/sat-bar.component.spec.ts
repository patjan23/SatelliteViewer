import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatBarComponent } from './sat-bar.component';

describe('SatBarComponent', () => {
  let component: SatBarComponent;
  let fixture: ComponentFixture<SatBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
