import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-course-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-api.component.html',
  styleUrl: './course-api.component.css'
})
export class CourseApiComponent implements OnInit {

  users: any[] = [];
  errorMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: () => {
        this.errorMessage = 'Failed to load users';
      }
    });
  }
}