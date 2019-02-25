import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsDetailComponent } from './ans-detail.component';

describe('AnsDetailComponent', () => {
  let component: AnsDetailComponent;
  let fixture: ComponentFixture<AnsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
