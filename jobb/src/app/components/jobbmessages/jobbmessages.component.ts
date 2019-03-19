import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

import { MzToastService } from 'ngx-materialize';
import { MzModalService } from 'ngx-materialize'

@Component({
  selector: 'app-jobbmessages',
  templateUrl: './jobbmessages.component.html',
  styleUrls: ['./jobbmessages.component.scss']
})
export class JobbmessagesComponent implements OnInit {

  bids: any = [];
  job: Object;

  constructor(
    private apiService: ApiService, 
    private router: Router, 
    private route: ActivatedRoute,
    private toastService: MzToastService,
    private modalService: MzModalService,
  ) { }

  ngOnInit() {
    this.job = {};
    this.route.params.subscribe(params => {
      this.apiService.getJobBids(params['id'])
      .subscribe(data => {
        this.bids = data['bids'];
        this.job = data['jobb'];
      });
    })
  }

  deleteBidHandler(bidId){
    this.apiService.deleteBid(bidId)
    .subscribe(data => {
      if(data['success']){
        const newBidsArr = this.bids.filter(obj => obj.id !== bidId)
        this.bids = newBidsArr;
      } else {
        this.toastService.show('Något oväntat hände, vänligen försök igen.', 3000, 'dark', () => {});
      }
    })
  }

}
