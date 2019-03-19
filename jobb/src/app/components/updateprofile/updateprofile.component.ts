import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent implements OnInit {

  description: String;
  skills: String;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private toastService: MzToastService
  ) { 
  }

  ngOnInit() {
    this.description = JSON.parse(localStorage.getItem('user'))['description'];
    this.skills =JSON.parse(localStorage.getItem('user'))['skills']; 
  }

  updateSubmit(){
    const updateObj = {
      user_id: JSON.parse(localStorage.getItem('user'))['id'],
      description: this.description,
      skills: this.skills
    };
    this.apiService.updateProfile(updateObj)
    .subscribe(data => {
      if(data['success']){
        const newUserObj = {
          id: JSON.parse(localStorage.getItem('user'))['id'],
          name: JSON.parse(localStorage.getItem('user'))['name'],
          username: JSON.parse(localStorage.getItem('user'))['username'],
          email: JSON.parse(localStorage.getItem('user'))['email'],
          description: updateObj.description,
          skills: updateObj.skills,
        }
        localStorage.setItem('user', JSON.stringify(newUserObj));
        this.toastService.show('Din profil är uppdaterad!', 3000, 'dark', () => {});
        this.router.navigate(['profil']);
      } else {
        this.toastService.show('Något oväntat hände, vänligen försök igen.', 3000, 'dark', () => {});
        return false;
      }
    })
  }

}
