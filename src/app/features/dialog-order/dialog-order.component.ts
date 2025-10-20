import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import flatpickr from 'flatpickr';
import { Instance } from 'flatpickr/dist/types/instance';
import { Russian } from 'flatpickr/dist/l10n/ru.js';

@Component({
  selector: 'app-dialog-order',
  imports: [],
  templateUrl: './dialog-order.component.html',
  styleUrl: './dialog-order.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogOrderComponent implements AfterViewInit, OnDestroy {
  private flatPickr: Instance | undefined;

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
}
