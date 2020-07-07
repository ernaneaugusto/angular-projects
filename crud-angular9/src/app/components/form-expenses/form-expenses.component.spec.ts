import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExpensesComponent } from './form-expenses.component';

describe('FormExpensesComponent', () => {
  let component: FormExpensesComponent;
  let fixture: ComponentFixture<FormExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
