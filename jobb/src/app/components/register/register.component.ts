import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MzToastService } from 'ngx-materialize';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;
  password2: String;

  constructor(private validateService: ValidateService,
              private authService: AuthService,
              private router: Router,
              private toastService: MzToastService,
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
    }

    if(!this.validateService.validateRegister(user)){
      this.toastService.show('Du måste fylla i alla fält!', 3000, 'dark', () => {});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.toastService.show('Du måste fylla i en giltig e-postadress!', 3000, 'dark', () => {});
      return false;
    }

    if(!this.validateService.validatePassword(this.password, this.password2)){
      this.toastService.show('Lösenorden matchar inte.', 3000, 'dark', () => {});
      return false;
    }

    // register user
    this.authService.registerUser(user)
    .subscribe(data => {
      if(data['success']){
        this.toastService.show('Ditt konto har skapats och du kan nu logga in.', 3000, 'dark', () => {});
        this.router.navigate(['logga_in']);
      } else {
        this.toastService.show('Något oväntat hände, vänligen försök igen.', 3000, 'dark', () => {});
        return false;
      }
    });
  }

}
