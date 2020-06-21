import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoryDeleteComponent } from './main-category-delete.component';

describe('MainCategoryDeleteComponent', () => {
  let component: MainCategoryDeleteComponent;
  let fixture: ComponentFixture<MainCategoryDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCategoryDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCategoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
