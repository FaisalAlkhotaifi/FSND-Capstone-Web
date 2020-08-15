import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCategoryDiologComponent } from './new-category-diolog.component';

describe('NewCategoryDiologComponent', () => {
  let component: NewCategoryDiologComponent;
  let fixture: ComponentFixture<NewCategoryDiologComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCategoryDiologComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCategoryDiologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
