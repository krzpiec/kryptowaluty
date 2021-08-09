import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCurrencyDataComponent } from './show-currency-data.component';

describe('ShowCurrencyDataComponent', () => {
  let component: ShowCurrencyDataComponent;
  let fixture: ComponentFixture<ShowCurrencyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCurrencyDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCurrencyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
