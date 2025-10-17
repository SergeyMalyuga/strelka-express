import { Directive, EventEmitter, HostListener, inject, Output } from '@angular/core';
import { BodyManagerService } from '../../core/services/body-manager.service';

@Directive({
  selector: '[appDialogClose]',
})
export class DialogCloseDirective {
  @Output() dialogClosed  = new EventEmitter<void>();
  private bodyManagerService: BodyManagerService = inject(BodyManagerService);

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.dialogClosed.emit();
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('dialog__close') || target.tagName === 'SPAN') {
      this.dialogClosed.emit();
    }
  }
}
