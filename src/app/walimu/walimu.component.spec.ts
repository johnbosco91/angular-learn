import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalimuComponent } from './walimu.component';

describe('WalimuComponent', () => {
  let component: WalimuComponent;
  let fixture: ComponentFixture<WalimuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalimuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalimuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
