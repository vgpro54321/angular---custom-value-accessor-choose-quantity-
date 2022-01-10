import { Component, OnInit, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'choose-quantity',
  templateUrl: 'choose-quantity.component.html',
  styleUrls: ['choose-quantity.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChooseQuantityComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ChooseQuantityComponent,
    },
  ],
})
export class ChooseQuantityComponent
  implements ControlValueAccessor, Validator
{
  quantity: number = 0;

  @Input()
  increment: number;

  onChange = (quantity) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  onAdd() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity += this.increment;
      this.onChange(this.quantity);
    }
  }

  onRemove() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity -= this.increment;
      this.onChange(this.quantity);
    }
  }

  onMarkTouched() {
    this.markAsTouched();
  }

  writeValue(quantity: number) {
    this.quantity = Number(quantity);
    this.touched = false;

    console.log('write value', quantity);
  }

  registerOnChange(onChange: any) {
    console.log('register on change');
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    console.log('register on touche');
    this.onTouched = onTouched;
  }

  markAsTouched() {
    console.log('markAsTouched');

    // Always marked touched
    this.onTouched();
    this.touched = true;

    // if (!this.touched) {
    //   console.log('switch touched flag');
    //   this.onTouched();
    //   this.touched = true;
    // }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const quantity = control.value;
    if (quantity <= 0) {
      return {
        mustBePositive: {
          quantity,
        },
      };
    }
  }
}
