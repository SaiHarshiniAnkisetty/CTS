import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { ReactiveRegistrationComponent } from './components/reactive-registration/reactive-registration.component';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CourseApiComponent } from './components/course-api/course-api.component';
import { CourseCounterComponent } from './components/course-counter/course-counter.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet,
  RouterLink,
  HeaderComponent,
  CourseApiComponent,
  CourseCounterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-course-portal';
}