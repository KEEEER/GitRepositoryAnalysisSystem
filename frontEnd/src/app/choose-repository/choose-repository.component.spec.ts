import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRepositoryComponent } from './choose-repository.component';

describe('ChooseRepositoryComponent', () => {
  let component: ChooseRepositoryComponent;
  let fixture: ComponentFixture<ChooseRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
