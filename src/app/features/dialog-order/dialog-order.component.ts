import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import flatpickr from 'flatpickr';
import { Instance } from 'flatpickr/dist/types/instance';
import { Russian } from 'flatpickr/dist/l10n/ru.js';
import { AppDialogShow } from '../../shared/directives/open-dialog.component';
import { DialogCloseDirective } from '../../shared/directives/dialog-close.directive';

@Component({
  selector: 'app-dialog-order',
  imports: [AppDialogShow, DialogCloseDirective],
  templateUrl: './dialog-order.component.html',
  styleUrl: './dialog-order.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogOrderComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) set isOpen(value: boolean) {
    this._isOpen = value;
  }
  @Output() dialogClosed = new EventEmitter<void>();

  private _isOpen = false;
  private flatPickr: Instance | undefined;

  public get isOpen() {
    return this._isOpen;
  }

  ngAfterViewInit(): void {
    this.flatPickr = flatpickr('#deliveryDate', {
      dateFormat: 'Y-m-d',
      minDate: new Date(),
      static: true,
      inline: true,
      locale: Russian,
    }) as Instance;
  }

  ngOnDestroy(): void {
    if (this.flatPickr) {
      this.flatPickr.destroy();
    }
  }

  onKeyDowned() {
    this.dialogClosed.emit();
  }
}


