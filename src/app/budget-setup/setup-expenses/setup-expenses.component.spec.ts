import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupExpensesComponent } from './setup-expenses.component';

describe('SetupExpensesComponent', () => {
  let component: SetupExpensesComponent;
  let fixture: ComponentFixture<SetupExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
