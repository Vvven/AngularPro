import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionareaComponent } from './discussionarea.component';

describe('DiscussionareaComponent', () => {
  let component: DiscussionareaComponent;
  let fixture: ComponentFixture<DiscussionareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
