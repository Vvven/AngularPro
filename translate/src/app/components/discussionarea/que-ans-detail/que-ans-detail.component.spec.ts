import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueAnsDetailComponent } from './que-ans-detail.component';

describe('QueAnsDetailComponent', () => {
  let component: QueAnsDetailComponent;
  let fixture: ComponentFixture<QueAnsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueAnsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueAnsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
