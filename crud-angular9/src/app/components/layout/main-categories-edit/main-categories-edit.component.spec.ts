import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoriesEditComponent } from './main-categories-edit.component';

describe('MainCategoriesEditComponent', () => {
  let component: MainCategoriesEditComponent;
  let fixture: ComponentFixture<MainCategoriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCategoriesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCategoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
