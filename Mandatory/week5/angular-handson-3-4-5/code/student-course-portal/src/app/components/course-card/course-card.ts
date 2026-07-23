import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule,CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})

export class CourseCardComponent implements OnChanges {
  @Input() course!: { id: number, name: string, code: string, credits: number, gradeStatus: string };
  @Output() enrollRequested = new EventEmitter<number>();

  isEnrolled = false;
  isExpanded = false;

  ngOnChanges(changes: SimpleChanges) {
    console.log('Previous value:', changes['course']?.previousValue);
    console.log('Current value:', changes['course']?.currentValue);
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
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