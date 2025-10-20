import { Directive, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';

@Directive({
  selector: '[appOpenDialogQuestions]',
})
export class DialogTriggerDirective {
  @Output() dialogOpened = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  onClick(evt: MouseEvent) {
    const target = evt.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      this.dialogOpened.emit();
    }
  }
}
