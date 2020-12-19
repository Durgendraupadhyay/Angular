import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlboxComponent } from './urlbox.component';

describe('UrlboxComponent', () => {
  let component: UrlboxComponent;
  let fixture: ComponentFixture<UrlboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
