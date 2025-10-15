import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelectServiceLabel]',
})
export class AppSelectServiceLabel {
  private elementRef = inject(ElementRef);
  private render = inject(Renderer2);

  @HostListener('change')
  onClick(): void {
    if (this.elementRef.nativeElement.classList.contains('selected')) {
      this.render.removeClass(this.elementRef.nativeElement, 'selected');
    } else {
      this.render.addClass(this.elementRef.nativeElement, 'selected');
    }
  }
}
