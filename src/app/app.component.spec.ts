import { TestBed } from '@angular/core/testing';
import { AppComponen } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponen]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponen);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angularintro'`, () => {
    const fixture = TestBed.createComponent(AppComponen);
    const app = fixture.componentInstance;
    expect(app['title']).toEqual('Angularintro');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponen);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Angularintro app is running!');
  });
});
