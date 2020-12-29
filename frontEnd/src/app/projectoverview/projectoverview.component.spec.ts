import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectoverviewComponent } from './projectoverview.component';

describe('ProjectoverviewComponent', () => {
  let component: ProjectoverviewComponent;
  let fixture: ComponentFixture<ProjectoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectoverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
