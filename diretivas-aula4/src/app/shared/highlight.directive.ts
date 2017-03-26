import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string;
  @Input() appHighlight: string;

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.appHighlight;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() {
    this.defaultColor = 'white';
    this.appHighlight = 'yellow';
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() { }

}
