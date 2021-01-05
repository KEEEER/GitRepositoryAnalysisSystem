import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparemultiprojectComponent } from './comparemultiproject.component';

describe('ComparemultiprojectComponent', () => {
  let component: ComparemultiprojectComponent;
  let fixture: ComponentFixture<ComparemultiprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparemultiprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparemultiprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
