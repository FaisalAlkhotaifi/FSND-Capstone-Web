import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieDiologComponent } from './new-movie-diolog.component';

describe('NewMovieDiologComponent', () => {
  let component: NewMovieDiologComponent;
  let fixture: ComponentFixture<NewMovieDiologComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMovieDiologComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMovieDiologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
