import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowInputWithColor]'
})
export class ShowInputWithColorDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appShowInputWithColor(color: string) {
    this.viewContainer.clear();
    if (color) {
      this.viewContainer.createEmbeddedView(this.templateRef);

      const inputs: any = this.templateRef.elementRef.nativeElement.nextElementSibling.getElementsByTagName('input');

      for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = color;
      }
    }
  }

}
