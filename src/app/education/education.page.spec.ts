import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationPage } from './education.page';

describe('EducationPage', () => {
  let component: EducationPage;
  let fixture: ComponentFixture<EducationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
