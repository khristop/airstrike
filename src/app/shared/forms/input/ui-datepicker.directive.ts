import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

declare var $: any;

@Directive({
  selector: '[saUiDatepicker]'
})
export class UiDatepickerDirective implements OnInit {

  @Input() saUiDatepicker: any;

  constructor(private el: ElementRef, private model: NgControl) {
  }

  ngOnInit() {
    $.datepicker.setDefaults($.datepicker.regional['es']);
    let onSelectCallbacks = [];
    let saUiDatepicker = this.saUiDatepicker || {};
    let element = $(this.el.nativeElement);

    if (saUiDatepicker.fechaMinima) {
      $(saUiDatepicker.minRestrict).datepicker('option', 'minDate', new Date());
    }

    if (saUiDatepicker.fechaMaxima) {
      $(saUiDatepicker.maxRestrict).datepicker('option', 'maxDate', new Date());
    }

    if (saUiDatepicker.minRestrict) {
      onSelectCallbacks.push((selectedDate) => {
        $(saUiDatepicker.minRestrict).datepicker('option', 'minDate', selectedDate);
      });
    }
    if (saUiDatepicker.maxRestrict) {
      onSelectCallbacks.push((selectedDate) => {
        $(saUiDatepicker.maxRestrict).datepicker('option', 'maxDate', selectedDate);
      });
    }


    //Let others know about changes to the data field
    onSelectCallbacks.push((selectedDate) => {
      //element.triggerHandler("change");

      let form = element.closest('form');
      if (typeof form.bootstrapValidator == 'function') {
        try {
          form.bootstrapValidator('revalidateField', element);
        } catch (e) {
          //console.log(e.message)
        }
      }
    });

    let options = $.extend(saUiDatepicker, {
      prevText: '<i class="fa fa-chevron-left"></i>',
      nextText: '<i class="fa fa-chevron-right"></i>',
      dateFormat: 'yy-mm-dd',

      onSelect: (selectedDate) => {
        $(this.el.nativeElement).trigger('input');
        onSelectCallbacks.forEach((callback) => {
          callback.call(callback, selectedDate);
        })
      },
      beforeShow: function () {
        setTimeout(function () {
          $('.ui-datepicker').css('z-index', 99999999999999);
        }, 0);
      }
    });

    //Fecha de actual minima
    if (saUiDatepicker.fechaMinima) {
      options['minDate'] = new Date();
    }

    if (saUiDatepicker.fechaMaxima) {
      options['maxDate'] = new Date();
    }

    element.datepicker(options);

    element.on('input', (e) => {

      if (this.model && this.model.control) {
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
