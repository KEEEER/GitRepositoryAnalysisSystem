import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitTrendComponent } from './commit-trend.component';

describe('CommitTrendComponent', () => {
  let component: CommitTrendComponent;
  let fixture: ComponentFixture<CommitTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitTrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
