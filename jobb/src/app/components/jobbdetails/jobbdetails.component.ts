import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MailService } from '../../services/mail.service';
import { AuthService } from '../../services/auth.service';
import { MzToastService } from 'ngx-materialize';
import TimeAgo from 'javascript-time-ago'
import sv from 'javascript-time-ago/locale/sv'

TimeAgo.addLocale(sv)
const timeAgo = new TimeAgo('sv-SV');

@Component({
  selector: 'app-jobbdetails',
  templateUrl: './jobbdetails.component.html',
  styleUrls: ['./jobbdetails.component.scss']
})
export class JobbdetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private authService: AuthService,
    private mailService: MailService,
    private toastService: MzToastService
    ) { }

  ngOnInit() {
  }
}
