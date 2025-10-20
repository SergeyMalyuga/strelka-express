import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppDialogShow } from '../directives/open-dialog.component';
import { DialogCloseDirective } from '../directives/dialog-close.directive';
import { FIRST_ERRORS_MESSAGE } from '../../core/consts';

@Component({
  selector: 'app-dialog-error',
  templateUrl: './dialog-error.component.html',
  imports: [AppDialogShow, DialogCloseDirective],
  styleUrl: './dialog-error.component.scss',
})
export class DialogErrorComponent {
  @Input({ required: true }) errors!: string[];
  @Input({ required: true })
  set isOpen(value: boolean) {
    this._isOpen = value;
  }
  @Output() dialogClosed = new EventEmitter<void>();

  private _isOpen: boolean = false;

  public readonly FIRST_ERRORS_MESSAGE = FIRST_ERRORS_MESSAGE;

  public get isOpen(): boolean {
    return this._isOpen;
  }

  public onKeyDowned() {
    this.dialogClosed.emit();
  }
}
