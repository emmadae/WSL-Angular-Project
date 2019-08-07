import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesContentComponent } from './athletes-content.component';

describe('AthletesContentComponent', () => {
  let component: AthletesContentComponent;
  let fixture: ComponentFixture<AthletesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthletesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
