import { Directive, inject, Input, OnChanges, SimpleChanges, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMonitor]'
})
export class MonitorDirective implements OnChanges {
@Input('appMonitorCompoennt') component: Type<any> | undefined;

private viewContainerRef = inject(ViewContainerRef);

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['component'] && this.component){
      this.locaComponent()
    }
  }


  private locaComponent(): void{
    this.viewContainerRef.clear();
    if(!this.component){
      return
    }
    this.viewContainerRef.createComponent(this.component);


  }
}
