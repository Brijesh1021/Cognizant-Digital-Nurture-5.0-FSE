import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enrollment-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {
  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = '';
  agreeToTerms = false;

  submitted = false;
  courseService: any;

  onSubmit(form: NgForm) {
    console.log('Form value:', form.value);
    console.log('Form valid:', form.valid);

    const newCourse = {
      name: 'New Enrollment Course',
      code: 'NEW101',
      credits: form.value.courseId,
      gradeStatus: 'pending' as const
    };

    this.courseService.createCourse(newCourse).subscribe({
      next: (created: any) => console.log('Created:', created),
      error: (err: any) => console.error('Failed to create course:', err)
    });

    this.submitted = true;
  }
}