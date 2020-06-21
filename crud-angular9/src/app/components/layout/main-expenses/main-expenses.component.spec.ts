import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExpensesComponent } from './main-expenses.component';

describe('MainExpensesComponent', () => {
  let component: MainExpensesComponent;
  let fixture: ComponentFixture<MainExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
