import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  enrollForm?: { dirty: boolean };
}

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  if (component.enrollForm?.dirty) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};