import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewActorDiologComponent } from './new-actor-diolog.component';

describe('NewActorDiologComponent', () => {
  let component: NewActorDiologComponent;
  let fixture: ComponentFixture<NewActorDiologComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewActorDiologComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewActorDiologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
