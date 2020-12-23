import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBaseComponent } from './code-base.component';

describe('CodeBaseComponent', () => {
  let component: CodeBaseComponent;
  let fixture: ComponentFixture<CodeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
