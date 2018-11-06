import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandleStickComponent } from './candle-stick.component';

describe('CandleStickComponent', () => {
  let component: CandleStickComponent;
  let fixture: ComponentFixture<CandleStickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandleStickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandleStickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
