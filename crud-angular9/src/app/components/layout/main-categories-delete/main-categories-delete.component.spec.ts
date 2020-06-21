import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoriesDeleteComponent } from './main-categories-delete.component';

describe('MainCategoriesDeleteComponent', () => {
  let component: MainCategoriesDeleteComponent;
  let fixture: ComponentFixture<MainCategoriesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCategoriesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCategoriesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
