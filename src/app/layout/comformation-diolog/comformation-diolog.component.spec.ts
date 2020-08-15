import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComformationDiologComponent } from './comformation-diolog.component';

describe('DiologComponent', () => {
  let component: ComformationDiologComponent;
  let fixture: ComponentFixture<ComformationDiologComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComformationDiologComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComformationDiologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
