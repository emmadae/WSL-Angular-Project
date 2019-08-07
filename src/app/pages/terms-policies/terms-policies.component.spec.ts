import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsPoliciesComponent } from './terms-policies.component';

describe('TermsPoliciesComponent', () => {
  let component: TermsPoliciesComponent;
  let fixture: ComponentFixture<TermsPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
