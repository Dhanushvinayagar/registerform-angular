import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';

  constructor(private _dialog:MatDialog){

  }

  onSignup(){
      console.log("sup");
      this._dialog.open(SignupComponent,{
        width : '500px',
        height : '400px'
      })
    }
    
  onSignin(){
      console.log("sin");
      this._dialog.open(SigninComponent,{
        width : '500px',
        height : '300px'
      })
  }
}
