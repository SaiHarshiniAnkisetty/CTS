import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CourseService } from '../../services/course.service';
interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
}
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  isLoading = true;

  selectedCourseId: number | null = null;
  
  courses: any[] = [];
  constructor(private courseService: CourseService) {}
  ngOnInit(): void {

  setTimeout(() => {
    this.courses = this.courseService.getCourses();
    this.isLoading = false;
  }, 1500);

}

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  // trackBy improves performance by reusing existing DOM elements
  // instead of recreating them on every change detection.
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }
}