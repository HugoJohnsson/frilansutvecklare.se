import { Component, OnInit } from '@angular/core';
import { MzToastService } from 'ngx-materialize';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  title: String;
  description: String;
  budget: String;
  technologies: String;
  contact_email: String;

  constructor(
    private apiService: ApiService,
    private validateService: ValidateService,
    private router: Router,
    private toastService: MzToastService,
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    const job = {
      title: this.title,
      description: this.description,
      technologies: this.technologies,
      budget: this.budget,
      contact_email: this.contact_email,
      owner_id: JSON.parse(localStorage.getItem('user'))['id']
    }

    if (!this.validateService.validateJob(job)){
      return false;
    }

    if(!this.validateService.validateEmail(job.contact_email)){
      this.toastService.show('Du måste fylla i en giltig e-postadress!', 3000, 'dark', () => {});
      return false;
    };
    if(job.budget == undefined || job.budget == ''){
      job.budget = 'Ingen budget specificerad.';
    };
    if(job.technologies == undefined || job.technologies == ''){
      job.technologies = 'Inga färdigheter angivet.';
    };

    this.apiService.addJob(job)
    .subscribe(data => {
      if(data['success']){
        this.toastService.show('Ditt jobb är nu upplagt!', 3000, 'dark', () => {});
        return this.router.navigate(['jobb']);
      } else {
      this.toastService.show('Något oväntat hände, vänligen försök igen.', 3000, 'dark', () => {});
        return false;
      }
    });
  }

}
