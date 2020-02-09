import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerWithRowComponent } from './container-with-row.component';

describe('ContainerWithRowComponent', () => {
  let component: ContainerWithRowComponent;
  let fixture: ComponentFixture<ContainerWithRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerWithRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerWithRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
