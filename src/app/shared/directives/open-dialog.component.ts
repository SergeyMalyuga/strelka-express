import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { BodyManagerService } from '../../core/services/body-manager.service';

@Directive({
  selector: '[appDialogShow]',
})
export class AppDialogShow implements OnChanges, OnDestroy {
  @Input({ required: true }) isOpen!: boolean;

  private elementRef = inject(ElementRef);
  private bodyManagerService: BodyManagerService = inject(BodyManagerService);

  ngOnChanges(changes: SimpleChanges): void {
    const element = this.elementRef.nativeElement as HTMLDialogElement;
    if (this.isOpen ?? element.open) {
      element.close();
    }
    if (changes['isOpen']) {
      if (this.isOpen) {
        element.showModal();
        element.classList.add('is-open');

        this.bodyManagerService.setBodyOverflow(true);
      } else {
        element.classList.remove('is-open');
        setTimeout(() => element.close(), 300);
        this.bodyManagerService.setBodyOverflow(false);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.isOpen) {
      this.bodyManagerService.setBodyOverflow(false);
    }
  }
}
