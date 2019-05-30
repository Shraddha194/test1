import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appContactdirective]'
})
export class ContactdirectiveDirective {

  constructor() { }

  @HostListener('keyup', ['$event']) keyupfunc(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimm = input.value.replace(/\s+/g, "");
    if (trimm.length > 10){
      trimm = trimm.substr(0, 10);
    }

    let nums = [];
    for (let i = 0; i < trimm.length; i += 5) {
      nums.push(trimm.substr(i, 5));
    }
    input.value = nums.join(" ");

  }

}
