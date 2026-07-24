import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css'
})
export class StudentRegistrationComponent {

  student = {
    name: '',
    email: '',
    course: ''
  };

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    console.log(this.student);
    alert('Registration Successful!');
  }
}