import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistComponent } from './emplist.component';

describe('EmplistComponent', () => {
  let component: EmplistComponent;
  let fixture: ComponentFixture<EmplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
