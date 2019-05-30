import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPincodedirective]'
})
export class PincodedirectiveDirective {
public bordercolor:string;
public highlightcolor:string="red";
public defaultcolor:string="white";
  constructor() { }

  @HostListener('keyup', ['$event']) keyupfunc(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimm = input.value.replace(/\s+/g, "");
    if(trimm.length < 6){
        this.bordercolor=this.highlightcolor;
    }
    else{
      this.bordercolor=this.defaultcolor;
    }
  }
  @HostBinding('style.border-color') get setColor(){
    return this.bordercolor;
  }

}
