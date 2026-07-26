import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private message = '';

  setMessage(msg: string) {
    this.message = msg;
  }

  getMessage(): string {
    return this.message;
  }
}