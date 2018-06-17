import {Directive, ElementRef, OnInit, Input} from '@angular/core';
import { NgControl } from '@angular/forms';

declare var $: any;

@Directive({
  selector: '[smartClockpicker]'
})
export class SmartClockpickerDirective implements OnInit {

  @Input() smartClockpicker: any;

  constructor(private el:ElementRef, private model: NgControl) {
  }

  ngOnInit() {
    System.import('script-loader!clockpicker/dist/bootstrap-clockpicker.min.js').then(()=> {
      this.render()
    })
  }

  render() {
    $(this.el.nativeElement).clockpicker(this.smartClockpicker || {
      donetext: 'Guardar',
      autoclose: true,
      placement: 'top',
      twelvehour: true,
      beforeShow: function() {
        setTimeout(function(){
            $('.clockpicker-popover').css('z-index', 99999999999999);
        }, 0);
      }
    });
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
  }
}
