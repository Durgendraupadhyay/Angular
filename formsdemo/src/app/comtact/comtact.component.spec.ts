import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComtactComponent } from './comtact.component';

describe('ComtactComponent', () => {
  let component: ComtactComponent;
  let fixture: ComponentFixture<ComtactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComtactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComtactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
