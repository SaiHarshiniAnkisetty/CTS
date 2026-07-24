import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCounterComponent } from './course-counter.component';

describe('CourseCounterComponent', () => {
  let component: CourseCounterComponent;
  let fixture: ComponentFixture<CourseCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
