import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitLogComponent } from './commit-log.component';

describe('CommitLogComponent', () => {
  let component: CommitLogComponent;
  let fixture: ComponentFixture<CommitLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
