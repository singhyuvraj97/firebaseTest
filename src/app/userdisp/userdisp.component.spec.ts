import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdispComponent } from './userdisp.component';

describe('UserdispComponent', () => {
  let component: UserdispComponent;
  let fixture: ComponentFixture<UserdispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdispComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
