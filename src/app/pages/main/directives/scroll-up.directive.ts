import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollUp]',
})
export class ScrollUpDirective {
  private elementRef = inject(ElementRef);
  private render = inject(Renderer2);

  @HostListener('window:scroll')
  onWindowScroll() {
    const target = this.elementRef.nativeElement as HTMLElement;
    if (window.scrollY > 1000) {
      this.render.addClass(target, 'visible');
    } else {
      this.render.removeClass(target, 'visible');
    }
  }
}
