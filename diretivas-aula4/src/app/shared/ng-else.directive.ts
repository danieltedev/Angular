import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condicao: boolean){
    if(!condicao){
      this.v.createEmbeddedView(this.t);
    }else{
      this.v.clear();
    }
  }

  constructor(
    private t: TemplateRef<any>,
    private v: ViewContainerRef
    ) { }

}
