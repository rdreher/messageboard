import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
    .error {
      background-color: #ff0f0
    }
  `]
})
export class RegisterComponent {

  form;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, emailValid()]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
    }, { validator: macthingFields('password', 'confirmPassword') });
  }
  onSubmit() {
    console.log(this.form.value);
  }

  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }
}

function macthingFields(field1, field2) {
  return form => {
    if (form.controls[field1].value !== form.controls[field2].value) {
      return {mismatchedFields: true };
    }
  };
}

function emailValid() {
  return control => {
    // tslint:disable-next-line:max-line-length
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(control.value) ? null : { invalidEmail: true};
  };
}
