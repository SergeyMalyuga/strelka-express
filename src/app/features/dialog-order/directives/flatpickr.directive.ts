import { AfterViewInit, Directive, ElementRef, inject, OnDestroy } from '@angular/core';
import { Instance } from 'flatpickr/dist/types/instance';
import { Russian } from 'flatpickr/dist/l10n/ru';
import flatpickr from 'flatpickr';

@Directive({
  selector: '[appFlatpickr]',
})
export class FlatpickrDirective implements AfterViewInit, OnDestroy {
  private flatPickr: Instance | undefined;
  private elementRef: ElementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    this.flatPickr = flatpickr(this.elementRef.nativeElement, {
      dateFormat: 'Y-m-d',
      minDate: new Date(),
      static: true,
      inline: true,
      locale: Russian,
    }) as Instance;
  }

  ngOnDestroy(): void {
    if(this.flatPickr) {
      this.flatPickr?.destroy()
    }
  }
}
