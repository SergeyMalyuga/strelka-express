import { Directive, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';

@Directive({
  selector: '[appOpenDialogQuestions]',
})
export class DialogTriggerDirective {
  @Output() dialogOpened = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    this.dialogOpened.emit();
  }
}
