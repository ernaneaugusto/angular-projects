import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAmountItemsComponent } from './card-amount-items.component';

describe('CardAmountItemsComponent', () => {
  let component: CardAmountItemsComponent;
  let fixture: ComponentFixture<CardAmountItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAmountItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAmountItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
