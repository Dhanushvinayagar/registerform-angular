import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar) {

  }
  onCancel(){
      this.dialog.closeAll()
  }

  onSubmit(form:NgForm){
    if(form.valid){
      console.log(form.value);
    }
    this.dialog.closeAll()
  }
}
