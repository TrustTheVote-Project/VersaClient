import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonContestComponent } from './common-contest.component';

describe('CommonContestComponent', () => {
  let component: CommonContestComponent;
  let fixture: ComponentFixture<CommonContestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonContestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
