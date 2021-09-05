import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[MyBackgroundColor]'
})
export class BackgroundColorDirective {

  constructor(private element: ElementRef, private render: Renderer2) { 
    render.setStyle(element.nativeElement, 'background-color', 'rgb(28, 163, 253)')
  }
}
