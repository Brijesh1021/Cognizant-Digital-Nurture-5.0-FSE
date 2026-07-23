import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCardComponent,HighlightDirective],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {
  isLoading = true;

  courses = [
    { id: 1, name: 'Intro to Programming', code: 'CS101', credits: 3, gradeStatus: 'passed' },
    { id: 2, name: 'Data Structures', code: 'CS201', credits: 4, gradeStatus: 'failed' },
    { id: 3, name: 'Web Development', code: 'CS210', credits: 3, gradeStatus: 'pending' },
    { id: 4, name: 'Database Systems', code: 'CS301', credits: 4, gradeStatus: 'passed' },
    { id: 5, name: 'Operating Systems', code: 'CS310', credits: 3, gradeStatus: 'pending' }
  ];

  selectedCourseId: number | null = null;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}