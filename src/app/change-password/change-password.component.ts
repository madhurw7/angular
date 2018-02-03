import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PasswordValidators } from './../common/password.validators';
import { Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {

  form;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      "oldPass": new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        PasswordValidators.cannotContainSpace
      ],
    PasswordValidators.checkPassDB),
      "newPass": new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        PasswordValidators.cannotContainSpace
      ]),
      "newPassCheck": new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        PasswordValidators.cannotContainSpace
      ],)
    })
  }

}
