import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputHighlight]'
})
export class InputHighlightDirective {

  @Input() color: string;

  constructor(private el: ElementRef) {}

  @HostListener('focus') onfocus() {
    this.highLight(this.color);
  }

  @HostListener('blur') onblur() {
    this.highLight(null);
  }

  private highLight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
