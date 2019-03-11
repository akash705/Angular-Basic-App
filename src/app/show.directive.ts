import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective {
  @Input() set appShow(condition:boolean){
    if(condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }
  constructor(private templateRef:TemplateRef<any>,private vcRef:ViewContainerRef) { 

  }

}
