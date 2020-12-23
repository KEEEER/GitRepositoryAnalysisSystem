import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTrackComponent } from './issue-track.component';

describe('IssueTrackComponent', () => {
  let component: IssueTrackComponent;
  let fixture: ComponentFixture<IssueTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
