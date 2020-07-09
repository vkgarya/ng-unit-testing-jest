import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // PASSED
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  // PASSED
  it(`should have as title 'ng-unit-testing-jest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('ng-unit-testing-jest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ng-unit-testing-jest app is running!');
  });

  // Should call openCancelWindow function on button click
  // PASSED
  it('should call openCancelWindow function on button click', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance
    spyOn(component, 'openCancelWindow');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick(); // make sure that everything that is async is resolved/completed
    expect(component.openCancelWindow).toHaveBeenCalled();
  }));

  // Should call openCancelWindow function on span by class click
  // PASSED
  it('should call openCancelWindow function on span by class click', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance
    spyOn(component, 'openCancelWindow');
    fixture.detectChanges();
    let span = fixture.debugElement.query(By.css('.cancel-link')).nativeElement;
    span.click();
    expect(component.openCancelWindow).toHaveBeenCalled();
  }));
});
