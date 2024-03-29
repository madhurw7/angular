import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Validators } from '@angular/forms'; 

import { UsernameValidators } from './../common/username.validators';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('',
     [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ],
     UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }
  
  get password(){
    return this.form.get('password');
  }

  login(){
    
      this.form.setErrors({
        invalidLogin: true,
    });
  }
}
