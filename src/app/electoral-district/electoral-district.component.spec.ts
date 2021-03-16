import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoralDistrictComponent } from './electoral-district.component';

describe('ElectoralDistrictComponent', () => {
  let component: ElectoralDistrictComponent;
  let fixture: ComponentFixture<ElectoralDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectoralDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectoralDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
