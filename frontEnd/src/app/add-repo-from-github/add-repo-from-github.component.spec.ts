import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRepoFromGithubComponent } from './add-repo-from-github.component';

describe('AddRepoFromGithubComponent', () => {
  let component: AddRepoFromGithubComponent;
  let fixture: ComponentFixture<AddRepoFromGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRepoFromGithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRepoFromGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
