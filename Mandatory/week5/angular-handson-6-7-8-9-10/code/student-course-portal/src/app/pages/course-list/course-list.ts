import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, CourseCardComponent, HighlightDirective],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {
  isLoading = true;
  courses: Course[] = [];
  errorMessage = '';
  selectedCourseId: number | null = null;
  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') || '';

    this.courseService.getCourses().subscribe({
      next: courses => this.courses = courses,
      error: err => {
        this.errorMessage = err.message;
        this.isLoading = false;
      },
      complete: () => this.isLoading = false
    });
  }

  onSearchChange() {
    this.router.navigate(['courses'], { queryParams: { search: this.searchTerm } });
  }

  trackByCourseId(index: number, course: Course) {
    return course.id;
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}