import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExpensesEditComponent } from './main-expenses-edit.component';

describe('MainExpensesEditComponent', () => {
  let component: MainExpensesEditComponent;
  let fixture: ComponentFixture<MainExpensesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainExpensesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainExpensesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
