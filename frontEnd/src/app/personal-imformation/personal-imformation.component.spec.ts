import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalImformationComponent } from './personal-imformation.component';

describe('PersonalImformationComponent', () => {
  let component: PersonalImformationComponent;
  let fixture: ComponentFixture<PersonalImformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalImformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalImformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
