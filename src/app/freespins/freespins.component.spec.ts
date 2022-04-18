import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreespinsComponent } from './freespins.component';

describe('FreespinsComponent', () => {
  let component: FreespinsComponent;
  let fixture: ComponentFixture<FreespinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreespinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreespinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
