import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { DialogTriggerDirective } from '../../shared/directives/dialog-trigger.directive';
import { AppDialogShow } from '../../shared/directives/open-dialog.component';
import { BodyManagerService } from '../../core/services/body-manager.service';
import { DialogCloseDirective } from '../../shared/directives/dialog-close.directive';

@Component({
  selector: 'app-questions',
  imports: [DialogTriggerDirective, AppDialogShow, DialogCloseDirective],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsComponent {
  public isDialogOpened: WritableSignal<boolean> = signal<boolean>(false);

  onDialogOpened() {
    this.isDialogOpened.set(true);
  }

  onKeyDowned() {
    this.isDialogOpened.set(false);
  }
}
