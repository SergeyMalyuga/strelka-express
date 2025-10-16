import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTransformTranslateForm]',
})
export class TransformTranslateFormDirective {
  private elementRef = inject(ElementRef);
  private render = inject(Renderer2);

  @HostListener('window:load')
  onWindowLoad() {
    const target = this.elementRef.nativeElement as HTMLElement;
    this.render.addClass(target, 'show');
  }
}
