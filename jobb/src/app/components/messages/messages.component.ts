import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

import { MzToastService } from 'ngx-materialize';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  jobs: any = [];

  constructor(
    private apiService: ApiService, 
    private router: Router,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
    this.apiService.getUserJobs(JSON.parse(localStorage.getItem('user'))['id'])
    .subscribe(data => {
      this.jobs = JSON.parse(data['jobb']);
    });
  }

  deleteJobHandler(jobId){
    this.apiService.deleteJob(jobId)
    .subscribe(data => {
      if(data['success']){
        const newJobsArr = this.jobs.filter(obj => obj.id !== jobId)
        this.jobs = newJobsArr;
      } else {
        this.toastService.show('Något oväntat hände, vänligen försök igen.', 3000, 'dark', () => {});
      }
    })
  }

  text_truncate(str, length, ending){
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }

}
