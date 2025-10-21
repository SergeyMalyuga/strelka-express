import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import flatpickr from 'flatpickr';
import { Instance } from 'flatpickr/dist/types/instance';
import { Russian } from 'flatpickr/dist/l10n/ru.js';
import { AppDialogShow } from '../../shared/directives/open-dialog.component';
import { DialogCloseDirective } from '../../shared/directives/dialog-close.directive';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dialog-order',
  imports: [AppDialogShow, DialogCloseDirective, FormsModule, ReactiveFormsModule],
  templateUrl: './dialog-order.component.html',
  styleUrl: './dialog-order.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogOrderComponent implements AfterViewInit, OnDestroy, OnInit {
  @Input({ required: true }) set isOpen(value: boolean) {
    this._isOpen = value;
  }
  @Output() dialogClosed = new EventEmitter<void>();

  private _isOpen = false;
  private flatPickr: Instance | undefined;
  private fb: FormBuilder = inject(FormBuilder);

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

  ngAfterViewInit(): void {
    this.flatPickr = flatpickr('#deliveryDate', {
      dateFormat: 'Y-m-d',
      minDate: new Date(),
      static: true,
      inline: true,
      locale: Russian,
    }) as Instance;
  }

  ngOnInit(): void {
    this.orderGroup.get('pickup')?.valueChanges.subscribe((value: any) => {
      if (value === 'Yes') {
        this.orderGroup.get('address')?.enable();
      } else {
        this.orderGroup.get('address')?.disable();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.flatPickr) {
      this.flatPickr.destroy();
    }
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
