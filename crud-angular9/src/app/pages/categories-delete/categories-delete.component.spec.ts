import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDeleteComponent } from './categories-delete.component';

describe('CategoriesDeleteComponent', () => {
  let component: CategoriesDeleteComponent;
  let fixture: ComponentFixture<CategoriesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
