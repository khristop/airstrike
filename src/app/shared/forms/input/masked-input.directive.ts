import {Directive, Input, ElementRef, OnInit, HostListener} from '@angular/core';
import { NgControl } from '@angular/forms';

declare var $: any;

@Directive({
  selector: '[saMaskedInput]'
})
export class MaskedInput implements OnInit{

  @Input() saMaskedInput: string;
  @Input() saMaskedPlaceholder: string;

  constructor(private el: ElementRef, private model: NgControl) {}

  ngOnInit(){
    System.import('script-loader!jquery.maskedinput/src/jquery.maskedinput.js').then(()=>{
      let options = this.saMaskedPlaceholder ? {placeholder: this.saMaskedPlaceholder} : '';
      $(this.el.nativeElement).mask(this.saMaskedInput, options);
      $(this.el.nativeElement).on('change', (e) => {
        if (this.model && this.model.control) {
          const newValue = this.el.nativeElement.value;
  
          this.model.control.setValue(newValue, {
            emitEvent: true,
            emitModelToViewChange: false,
            emitViewToModelChange: false
          });
        }
      });
      
    })
  }


  // ngDoCheck() {
  //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   //Add 'implements DoCheck' to the class.
  //   const newValue = this.el.nativeElement.value;
  //   this.model.control.setValue(newValue, {
  //     emitEvent: false,
  //     emitModelToViewChange: false,
  //     emitViewToModelChange: false
  //   });
  // }

}

