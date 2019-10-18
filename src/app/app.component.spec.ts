import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AsInputModule } from './lib/as-input.module';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture <AppComponent>;
  let el: DebugElement;
  let usernameField: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [AsInputModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    usernameField = el.query(By.css('#username'));
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should create username field', () => {
    expect(usernameField).toBeTruthy();
  });

  it('should have projected the correct class the email field', async(() => {
      expect(usernameField.query(By.css('input.asi'))).toBeTruthy();
      expect(usernameField.query(By.css('input.asi-input'))).toBeTruthy();
  }));

});
