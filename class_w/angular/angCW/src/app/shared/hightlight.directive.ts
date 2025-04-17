import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseleave') onMouseOver() {
    this.el.nativeElement.style.background = 'red';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.background = 'blue';
  }
}
