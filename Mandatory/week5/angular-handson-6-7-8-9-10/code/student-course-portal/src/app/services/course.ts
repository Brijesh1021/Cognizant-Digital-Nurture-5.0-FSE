import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

const API_URL = 'http://localhost:3000/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(API_URL);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${API_URL}/${id}`);
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(API_URL, course);
  }

  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${API_URL}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}