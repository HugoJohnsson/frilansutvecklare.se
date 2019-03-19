import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouteService } from '../../services/route.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.scss']
})
export class Profile2Component implements OnInit {

  user: Object;
  jobId: number;

  constructor(
    private apiService: ApiService,
    private routeService: RouteService,
    private route: ActivatedRoute, 
    private router: Router,
    private toastService: MzToastService
  ) 
  {
  }

  ngOnInit() {
    this.user = {};
    this.jobId = this.route.snapshot.params.jobId;
    this.apiService.getUserData(this.route.snapshot.params.id)
    .subscribe(data => {
      if(data['success']){
        this.user = JSON.parse(data['userData']);
      } else {
        this.toastService.show('Något oväntat hände, vänligen försök igen.', 3000, 'dark');
        this.router.navigate(['meddelanden']);
      }
    })
  }

}
