import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    this.course = this.courseService.getCourseById(id);
  }
}