import { Directive, ElementRef } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]', // attribute selector
  standalone: true
})
export class ColorizerDirective {

  constructor(private elementRef: ElementRef ) { // dependency injection
    console.log('Inside ColorizerDirective constructor');
    // find out the element in which the appColorizer is used
    console.log(this.elementRef.nativeElement);

    // then, change the bg color, text color
  }

}
