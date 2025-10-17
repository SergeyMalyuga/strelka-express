import { Component, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';
import { DialogCloseDirective } from '../directives/dialog-close.directive';
import { AppRoute } from '../../core/consts';
import { RouterLink } from '@angular/router';
import { AppDialogShow } from '../directives/open-dialog.component';

@Component({
  selector: 'app-dialog-offer',
  templateUrl: './dialog-get-offer.component.html',
  imports: [DialogCloseDirective, RouterLink, AppDialogShow],
  styleUrl: './dialog-get-offer.component.scss',
})
export class DialogOfferComponent {
  protected readonly AppRoute = AppRoute;
  @Output() dialogClosed = new EventEmitter<void>();
  @Input({ required: true }) isDialogOpened!: WritableSignal<boolean>;

  onKeyDowned() {
    this.dialogClosed.emit();
  }
}
