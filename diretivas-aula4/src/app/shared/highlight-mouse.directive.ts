import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  private backgroundColor: string;

  @HostListener('mouseenter') onMouseOver(){
    /*this.r.setElementStyle(
      this.e.nativeElement, 'background-color','yellow'
    );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this.r.setElementStyle(
      this.e.nativeElement, 'background-color','white'
    );*/
    this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  constructor(
    //private e: ElementRef, private r: Renderer
    ) {

  }

}
