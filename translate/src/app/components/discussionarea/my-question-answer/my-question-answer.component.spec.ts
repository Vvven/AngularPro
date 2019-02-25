import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuestionAnswerComponent } from './my-question-answer.component';

describe('MyQuestionAnswerComponent', () => {
  let component: MyQuestionAnswerComponent;
  let fixture: ComponentFixture<MyQuestionAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQuestionAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuestionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
