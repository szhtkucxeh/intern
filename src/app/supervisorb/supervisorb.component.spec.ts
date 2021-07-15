import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorbComponent } from './supervisorb.component';

describe('SupervisorbComponent', () => {
  let component: SupervisorbComponent;
  let fixture: ComponentFixture<SupervisorbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
