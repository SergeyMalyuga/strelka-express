import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DialogErrorService {
  private errorsMessages: string[] = [];

  getErrorsMessages(formGroup: FormGroup) {
    this.errorsMessages = [];
    if (formGroup.get('name')?.errors?.['required']) {
      this.errorsMessages.push('Поле «Имя» обязательно для заполнения.');
    } else if (formGroup.get('phone')?.errors?.['required']) {
      this.errorsMessages.push('Поле «Номер телефона» обязательно для заполнения.');
    }
    return this.errorsMessages;
  }
}
