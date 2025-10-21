import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { AppDialogShow } from '../../shared/directives/open-dialog.component';
import { DialogCloseDirective } from '../../shared/directives/dialog-close.directive';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { FlatpickrDirective } from './directives/flatpickr.directive';

@Component({
  selector: 'app-dialog-order',
  imports: [
    AppDialogShow,
    DialogCloseDirective,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrDirective,
  ],
  templateUrl: './dialog-order.component.html',
  styleUrl: './dialog-order.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogOrderComponent implements OnDestroy, OnInit {
  @Input({ required: true }) set isOpen(value: boolean) {
    this._isOpen = value;
  }
  @Output() dialogClosed = new EventEmitter<void>();

  private _isOpen = false;
  private fb: FormBuilder = inject(FormBuilder);
  private destroySubject: Subject<void> = new Subject<void>();

  public orderGroup: FormGroup = this.fb.group({
    city: ['', Validators.required],
    warehouse: ['', Validators.required],
    date: ['', Validators.required],
    packaging: ['', Validators.required],
    count: ['', Validators.required],
    volume: ['', Validators.required],
    pickup: ['', Validators.required],
    address: [{ value: '', disabled: true }],
  });

  public get isOpen() {
    return this._isOpen;
  }

  ngOnInit(): void {
    this.orderGroup
      .get('pickup')
      ?.valueChanges.pipe(takeUntil(this.destroySubject))
      .subscribe((value: any) => {
        if (value === 'Yes') {
          this.orderGroup.get('address')?.enable();
        } else {
          this.orderGroup.get('address')?.disable();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  onKeyDowned() {
    this.dialogClosed.emit();
    this.orderGroup.reset();
  }

  onSubmit() {
    if (this.orderGroup.valid) {
      console.log(this.orderGroup.value);
    }
  }
}
