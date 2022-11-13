import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaurentComponent } from './laurent.component';

describe('LaurentComponent', () => {
  let component: LaurentComponent;
  let fixture: ComponentFixture<LaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaurentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
