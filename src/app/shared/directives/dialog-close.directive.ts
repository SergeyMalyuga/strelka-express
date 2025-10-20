import { Directive, EventEmitter, HostListener, inject, Output } from '@angular/core';
import { BodyManagerService } from '../../core/services/body-manager.service';

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
