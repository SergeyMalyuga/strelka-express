import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { BodyManagerService } from '../../../core/services/body-manager.service';

@Directive({
  selector: '[appDialogShow]',
})
export class AppDialogShow implements OnChanges, OnDestroy {
  @Input({ required: true }) isOpen!: boolean;

  private elementRef = inject(ElementRef);
  private bodyManagerService: BodyManagerService = inject(BodyManagerService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      const element = this.elementRef.nativeElement as HTMLDialogElement;
      if (this.isOpen) {
        element.showModal();
        this.bodyManagerService.setBodyOverflow(true);
      } else {
        element.close();
        this.bodyManagerService.setBodyOverflow(false);
      }
    }
  }

  ngOnDestroy(): void {
    if(this.isOpen) {
      this.bodyManagerService.setBodyOverflow(false);
    }
  }
}
