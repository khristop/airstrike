import {Directive, ElementRef, OnInit} from '@angular/core';
import { NgControl } from '@angular/forms';

declare var $: any;

@Directive({
  selector: '[smartTimepicker]'
})
export class SmartTimepickerDirective implements OnInit{

  constructor(private el: ElementRef, private model: NgControl) { }

  ngOnInit(){
    System.import('script-loader!bootstrap-timepicker/js/bootstrap-timepicker.min.js').then(()=>{
      this.render()
    })
  }


  render(){
    $(this.el.nativeElement).timepicker();
  }
  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    const newValue = this.el.nativeElement.value;
    this.model.control.setValue(newValue, {
      emitEvent: false,
      emitModelToViewChange: false,
      emitViewToModelChange: false
    });
  }
}
