import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword(password1, password2) {
    if(password1 === password2) {
      return true;
    } else {
      return false;
    }
  }

  validateJob(jobb){
    if(jobb.title == undefined || jobb.description == '' || jobb.contact_email == undefined) {
      return false;
    } else {
      return true;
    }
  }
}
