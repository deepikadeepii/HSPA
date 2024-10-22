import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent  implements OnInit{

  constructor(private authService: AuthService) {}
    ngOnInit() {

    }

    onLogin(loginForm: NgForm) {
      console.log(loginForm.value);
      this.authService.authUser(loginForm.value);
      if (user) {
        console.log('Login Successful');
      } else {
        console.log('Login not Succesful');
      }


    }
  

}
