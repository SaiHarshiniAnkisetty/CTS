import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseApiComponent } from './course-api.component';

describe('CourseApiComponent', () => {
  let component: CourseApiComponent;
  let fixture: ComponentFixture<CourseApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
