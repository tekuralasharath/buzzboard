import { Directive,ElementRef,HostListener,Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[appNumbersonly]'
})
export class NumbersonlyDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange() {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this._el.nativeElement.value) {
      //$event.stopPropagation();
    }
  }

}