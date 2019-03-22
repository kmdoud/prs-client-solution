import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReviewLinesComponent } from './request-review-lines.component';

describe('RequestReviewLinesComponent', () => {
  let component: RequestReviewLinesComponent;
  let fixture: ComponentFixture<RequestReviewLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestReviewLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReviewLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
