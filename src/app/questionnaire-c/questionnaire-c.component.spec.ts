import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireCComponent } from './questionnaire-c.component';

describe('QuestionnaireCComponent', () => {
  let component: QuestionnaireCComponent;
  let fixture: ComponentFixture<QuestionnaireCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
