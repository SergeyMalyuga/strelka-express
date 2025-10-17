import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { AppDialogShow } from '../../shared/directives/open-dialog.component';
import { DialogCloseDirective } from '../../shared/directives/dialog-close.directive';
import { DialogTriggerDirective } from '../../shared/directives/dialog-trigger.directive';
import { AppRoute } from '../../core/consts';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tariffs',
  imports: [AppDialogShow, DialogCloseDirective, DialogTriggerDirective, RouterLink],
  templateUrl: './tariffs.component.html',
  styleUrl: './tariffs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffsComponent {
  public isDialogOpened: WritableSignal<boolean> = signal<boolean>(false);

  onDialogOpened() {
    this.isDialogOpened.set(true);
  }

  onKeyDowned() {
    this.isDialogOpened.set(false);
  }

  protected readonly AppRoute = AppRoute;
}
