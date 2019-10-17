import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsInputComponent } from './as-input.component';

describe('AsInputComponent', () => {
  let component: AsInputComponent;
  let fixture: ComponentFixture<AsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
