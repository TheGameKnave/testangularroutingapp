import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'comp1',
    templateUrl: './comp1.component.html',
  })
export class Component1 implements  OnDestroy{
    constructor(){}
    ngOnDestroy(): void {
        console.log("comp1 destroy")
      }
        
   
}