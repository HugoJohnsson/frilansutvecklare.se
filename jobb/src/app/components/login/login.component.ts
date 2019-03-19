import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MzToastService } from 'ngx-materialize';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: MzToastService,
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.loginUser(user)
    .subscribe(data => {
      if(data['success']){
        this.authService.storeUserData(data['token'], data['user']);
        this.toastService.show('Du är nu inloggad!', 3000, 'dark', () => {});
        this.router.navigate(['jobb']);
      } else {
        this.toastService.show(data['msg'], 3000, 'dark', () => {});
        return false;
      }
    })
  }
}
