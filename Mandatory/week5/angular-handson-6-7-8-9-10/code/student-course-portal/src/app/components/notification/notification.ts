import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  imports: [],
  providers: [NotificationService],
  
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class NotificationComponent {
  constructor(private notificationService: NotificationService) {
    this.notificationService.setMessage('This is a component-scoped notification!');
  }

  get message() {
    return this.notificationService.getMessage();
  }
}