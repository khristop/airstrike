import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from 'app/core/services/validador.service';

@Component({
  selector: 'control-messages',
  template: `<span [class.hidden]=" errorMessage === null" class="help-block">{{errorMessage}}</span>`
})
export class ControlMsjComponent {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}