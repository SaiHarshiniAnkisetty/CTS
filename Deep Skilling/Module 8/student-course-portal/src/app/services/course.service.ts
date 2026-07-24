import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses() {
    return [
      {
        id: 1,
        name: 'Angular',
        code: 'ANG101',
        credits: 4,
        gradeStatus: 'passed'
      },
      {
        id: 2,
        name: 'React',
        code: 'REA102',
        credits: 3,
        gradeStatus: 'failed'
      },
      {
        id: 3,
        name: 'Python',
        code: 'PY103',
        credits: 4,
        gradeStatus: 'pending'
      },
      {
        id: 4,
        name: 'Java',
        code: 'JA104',
        credits: 3,
        gradeStatus: 'passed'
      },
      {
        id: 5,
        name: 'Machine Learning',
        code: 'ML105',
        credits: 5,
        gradeStatus: 'pending'
      }
    ];
  }
}