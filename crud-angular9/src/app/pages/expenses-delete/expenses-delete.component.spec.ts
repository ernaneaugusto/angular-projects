import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesDeleteComponent } from './expenses-delete.component';

describe('ExpensesDeleteComponent', () => {
  let component: ExpensesDeleteComponent;
  let fixture: ComponentFixture<ExpensesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
