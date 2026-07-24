import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CourseActions from '../../store/actions/course.actions';
import { selectCount } from '../../store/selectors/course.selectors';

@Component({
  selector: 'app-course-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-counter.component.html',
  styleUrl: './course-counter.component.css'
})
export class CourseCounterComponent {

  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(CourseActions.increment());
  }

  decrement() {
    this.store.dispatch(CourseActions.decrement());
  }

  reset() {
    this.store.dispatch(CourseActions.reset());
  }
}