import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import TimeAgo from 'javascript-time-ago'
import sv from 'javascript-time-ago/locale/sv'

TimeAgo.addLocale(sv)
const timeAgo = new TimeAgo('sv-SV');

@Component({
  selector: 'app-jobb',
  templateUrl: './jobb.component.html',
  styleUrls: ['./jobb.component.scss'],
  providers: [ApiService]
})
export class JobbComponent implements OnInit {

  jobs: any = [];
  searchTerm: String;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {

    if(this.route.snapshot.paramMap.get("searchTerm")){
      const term = this.route.snapshot.paramMap.get("searchTerm");
      this.searchTerm = term;

      this.apiService.searchJobs(term)
      .subscribe(data => {
        const jobs = JSON.parse(data['jobb']).map(item => {
          const d = new Date(item.createdAt);
          item.published = timeAgo.format(d);
          return item;
        });
        this.jobs = jobs;
      });

    } else {
      this.apiService.getAllJobs()
      .subscribe(data => {
        const jobs = JSON.parse(data['jobb']).map(item => {
          const d = new Date(item.createdAt);
          item.published = timeAgo.format(d);
          return item;
        });
        this.jobs = jobs;
      });
    }
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
