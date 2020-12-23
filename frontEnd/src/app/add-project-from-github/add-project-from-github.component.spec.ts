import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectFromGithubComponent } from './add-project-from-github.component';

describe('AddProjectFromGithubComponent', () => {
  let component: AddProjectFromGithubComponent;
  let fixture: ComponentFixture<AddProjectFromGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectFromGithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectFromGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
