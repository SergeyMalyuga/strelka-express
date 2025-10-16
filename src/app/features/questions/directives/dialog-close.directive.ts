import { Directive, EventEmitter, HostListener, inject, Output } from '@angular/core';
import { BodyManagerService } from '../../../core/services/body-manager.service';

@Directive({
  selector: '[appDialogClose]',
})
export class DialogCloseDirective {
  @Output() keyDowned  = new EventEmitter<void>();
  private bodyManagerService: BodyManagerService = inject(BodyManagerService);

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.keyDowned.emit();
    }
  }
}
