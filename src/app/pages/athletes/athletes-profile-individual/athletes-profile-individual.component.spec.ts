import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesProfileIndividualComponent } from './athletes-profile-individual.component';

describe('AthletesProfileIndividualComponent', () => {
  let component: AthletesProfileIndividualComponent;
  let fixture: ComponentFixture<AthletesProfileIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletesProfileIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthletesProfileIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
