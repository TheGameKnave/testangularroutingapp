import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'comp2',
    templateUrl: './comp2.component.html',
  })
export class Component2 implements  OnDestroy{
    constructor(){}
  ngOnDestroy(): void {
    console.log("comp2 destroy")
  }
    
  
}