import { Directive, ElementRef, HostListener, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTransFormTranslateText]',
})
export class TransformTranslateTextDirective {
  private elementRef: ElementRef = inject(ElementRef);
  private render = inject(Renderer2);

  @HostListener('window:load')
  onWindowLoad() {
    const target = this.elementRef.nativeElement as HTMLElement;
    this.render.addClass(target, 'show');
  }
}
