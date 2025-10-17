import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
  WritableSignal,
} from '@angular/core';
import { DialogOfferComponent } from '../../shared/dialog-get-offer/dialog-get-offer.component';
import { DialogTriggerDirective } from '../../shared/directives/dialog-trigger.directive';

@Component({
  selector: 'app-promo',
  imports: [DialogOfferComponent, DialogTriggerDirective],
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoComponent {
  public isDialogOpened: WritableSignal<boolean> = signal<boolean>(false);

  onDialogOpened() {
    this.isDialogOpened.set(true);
  }

  onKeyDowned() {
    this.isDialogOpened.set(false);
  }
}
