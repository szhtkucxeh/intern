import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairebComponent } from './questionnaireb.component';

describe('QuestionnairebComponent', () => {
  let component: QuestionnairebComponent;
  let fixture: ComponentFixture<QuestionnairebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnairebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
