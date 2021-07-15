import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorBComponent } from './simulator-b.component';

describe('SimulatorBComponent', () => {
  let component: SimulatorBComponent;
  let fixture: ComponentFixture<SimulatorBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
