import { Directive, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';

@Directive({
  selector: '[appSelectService]',
})
export class AppSelectService {
  @Output() serviceSelected = new EventEmitter<string>();

  private elementRef = inject(ElementRef);

  @HostListener('change')
  onClick() {
    const target = this.elementRef.nativeElement as HTMLInputElement;
    this.serviceSelected.emit(target.value);
  }
}
