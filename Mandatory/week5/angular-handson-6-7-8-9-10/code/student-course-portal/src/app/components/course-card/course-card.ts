import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();
  isExpanded = false;

  constructor(
    private enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('Previous value:', changes['course']?.previousValue);
    console.log('Current value:', changes['course']?.currentValue);
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  viewDetails() {
    this.router.navigate(['courses', this.course.id]);
  }

  onEnrollClick() {
    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
    this.enrollRequested.emit(this.course.id);
  }

  get enrollButtonLabel() {
    return this.enrollmentService.isEnrolled(this.course.id) ? 'Unenroll' : 'Enroll';
  }

  get cardClasses() {
    return {
      'card--enrolled': this.enrollmentService.isEnrolled(this.course.id),
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  get borderColor() {
    if (this.course.gradeStatus === 'passed') return 'green';
    if (this.course.gradeStatus === 'failed') return 'red';
    return 'grey';
  }
}