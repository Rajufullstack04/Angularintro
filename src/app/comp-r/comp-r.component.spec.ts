import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRComponent } from './comp-r.component';

describe('CompRComponent', () => {
  let component: CompRComponent;
  let fixture: ComponentFixture<CompRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompRComponent]
    });
    fixture = TestBed.createComponent(CompRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
