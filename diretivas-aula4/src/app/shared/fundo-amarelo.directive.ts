import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private e: ElementRef, private r: Renderer) {
    //console.log(this.e);
    //this.e.nativeElement.style.backgroundColor = 'yellow';
    this.r.setElementStyle(
      this.e.nativeElement,
      'background-color',
      'yellow'
      );
  }

}
