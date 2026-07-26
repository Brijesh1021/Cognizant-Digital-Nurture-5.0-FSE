import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget';
import { NotificationComponent } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CourseSummaryWidgetComponent, NotificationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  coursesCount = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    console.log('HomeComponent initialised — courses loaded');
    this.coursesCount = this.courseService.getCourses().length;
  }

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }
}