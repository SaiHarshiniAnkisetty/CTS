import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from '../state/course.state';

export const selectCourseState =
  createFeatureSelector<CourseState>('course');

export const selectCount = createSelector(
  selectCourseState,
  (state) => state.count
);