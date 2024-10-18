import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]', // attribute selector
  standalone: true,
})
export class ColorizerDirective {
  // public variable
  divElement: any;

  // dependency injection
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log('Inside ColorizerDirective constructor');
    // find out the element in which the appColorizer is used
    console.log(this.elementRef.nativeElement);
    this.divElement = this.elementRef.nativeElement;
    this.addStyles();
    this.renderParaElement();
  }

  addStyles() {
    // then, change the bg color, text color
    this.renderer.setStyle(this.divElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.divElement, 'height', '200px');
    this.renderer.setStyle(this.divElement, 'font-size', '12px');

    // TODO: learn about using addClass in colorizer directive
  }

  renderParaElement() {
    const newPara = this.renderer.createElement('p'); // <p></p>
    this.renderer.setStyle(newPara, 'float', 'right'); // <p style='float:right'></p>
    this.renderer.setStyle(newPara, 'font-size', '12px');
    this.renderer.setStyle(newPara, 'font-style', 'italic');
    this.renderer.setStyle(newPara, 'background', 'lightgreen');

    const poweredByText = this.renderer.createText(
      'Powered By Colorizer Directive'
    );
    this.renderer.appendChild(newPara, poweredByText);
    this.renderer.appendChild(this.divElement, newPara);
  }

  // Handling the event inside directive -- click
  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    console.log(event.target); // where the event occurs
    // on click, I want to change the bg color of the div
    this.renderer.setStyle(event.target, 'background-color', 'red');
  }

  // TODO: try mouseover -- change the bg color
  // TODO: try mouseout -- change the bg color
  // TODO: Learn about @HostBinding()
  // TODO: try handling values of the attribute directive
}
