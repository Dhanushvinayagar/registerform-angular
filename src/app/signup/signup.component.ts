import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar) {

  }

  Form = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(8)]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmpassword : new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  onSubmit(){
    if(this.Form.valid){
      console.log(this.Form);
    }
    
    this.dialog.closeAll()

  }
  
  onCancel(){
    this.dialog.closeAll()
  }
}
