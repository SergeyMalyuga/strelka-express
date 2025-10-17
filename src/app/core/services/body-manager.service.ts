import { Injectable, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BodyManagerService {
  private render;
  private body = document.body;

  constructor(rendererFactory: RendererFactory2) {
    this.render = rendererFactory.createRenderer(null, null);
  }

  setBodyOverflow(fixed: boolean) {
    if (fixed) {
      this.render.setStyle(this.body, 'overflow', 'hidden');
    } else {
      this.render.setStyle(this.body, 'overflow', 'auto');
    }
  }
}
