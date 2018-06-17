import {Directive, ElementRef, OnInit} from '@angular/core';
import {addClassName, removeClassName} from "../../../utils/dom-helpers";
import { Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[select2]'
})
export class Select2Directive implements OnInit{

  @Input() options: {};
  @Output() changeValue: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef , private model: NgControl) {
    addClassName(this.el.nativeElement, ['sa-cloak', 'sa-hidden'])
  }

  ngOnInit(){

    System.import('script-loader!select2/dist/js/select2.min.js').then(()=>{
        System.import('script-loader!select2/dist/js/i18n/es.js').then(()=>{
        $(this.el.nativeElement).select2(this.options)
        removeClassName(this.el.nativeElement, ['sa-hidden']);
        jQuery(this.el.nativeElement).on(
          'change', (e) =>{ 
            if(this.model && this.model.control){
              const newValue = this.el.nativeElement.value;
              this.model.control.setValue(newValue, {
                emitEvent: true,
                emitModelToViewChange: false,
                emitViewToModelChange: false
              });
            }
          });

      });
    })
  }
}
