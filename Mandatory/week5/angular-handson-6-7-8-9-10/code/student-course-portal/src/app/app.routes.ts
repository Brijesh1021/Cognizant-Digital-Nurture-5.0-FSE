import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CourseListComponent } from './pages/course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout';
import { StudentProfileComponent } from './pages/student-profile/student-profile';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      { path: '', component: CourseListComponent },
      { path: ':id', component: CourseDetailComponent }
    ]
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    component: StudentProfileComponent
  },
  {
    path: 'enroll',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/enrollment-form/enrollment-form').then(m => m.EnrollmentForm)
  },
  {
    path: 'enroll-reactive',
    canDeactivate: [unsavedChangesGuard],
    loadComponent: () =>
      import('./pages/reactive-enrollment-form/reactive-enrollment-form').then(m => m.ReactiveEnrollmentFormComponent)
  },
  { path: '**', component: NotFound }
];