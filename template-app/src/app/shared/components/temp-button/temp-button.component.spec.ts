import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempButtonComponent } from './temp-button.component';

describe('TempButtonComponent', () => {
  let component: TempButtonComponent;
  let fixture: ComponentFixture<TempButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
