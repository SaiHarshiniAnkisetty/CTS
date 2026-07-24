import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/course.state';
import * as CourseActions from '../actions/course.actions';

export const courseReducer = createReducer(
  initialState,

  on(CourseActions.increment, (state) => ({
    ...state,
    count: state.count + 1
  })),

  on(CourseActions.decrement, (state) => ({
    ...state,
    count: state.count - 1
  })),

  on(CourseActions.reset, (state) => ({
    ...state,
    count: 0
  }))
);