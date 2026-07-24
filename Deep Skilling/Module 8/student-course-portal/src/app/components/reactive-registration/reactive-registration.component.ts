import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-registration.component.html',
  styleUrl: './reactive-registration.component.css'
})
export class ReactiveRegistrationComponent {

  registrationForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required]
    });

  }

  onSubmit(): void {

    this.submitted = true;

    if (this.registrationForm.valid) {

      console.log(this.registrationForm.value);

      alert('Reactive Form Submitted Successfully!');

    }

  }

}