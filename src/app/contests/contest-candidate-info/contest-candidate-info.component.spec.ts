import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestInfoComponent } from './contest-candidate-info.component';

describe('ContestInfoComponent', () => {
  let component: ContestInfoComponent;
  let fixture: ComponentFixture<ContestInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
