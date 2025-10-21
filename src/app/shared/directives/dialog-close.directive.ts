import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDialogClose]',
})
export class DialogCloseDirective {
  @Output() dialogClosed = new EventEmitter<void>();

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.dialogClosed.emit();
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (
      target.classList.contains('dialog__close') ||
      target.classList.contains('dialog-error__button-close') ||
      target.classList.contains('dialog-error__button') ||
      target.tagName === 'SPAN'
    ) {
      this.dialogClosed.emit();
    }
  }
}
