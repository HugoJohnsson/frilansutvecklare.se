import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllJobs(){
    return this.http.get('/api/jobs')
  }

  pGetAllJobs(pageNum){
    return this.http.get(`//api/jobs/p/${pageNum}`)
  }

  getJobData(id){
    return this.http.get(`/api/jobs/${id}`)
  }

  searchJobs(term){
    return this.http.get(`/api/search?term=${term}`)
  }

  addJob(job){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: localStorage.getItem('id_token')
    });
    return this.http.post('/api/add', job, {headers:headers})
  }

  deleteJob(jobId){
    const headers = new HttpHeaders({
      Authorization: localStorage.getItem('id_token')
    });
    return this.http.delete(`/api/remove_job/${jobId}/`, {headers:headers})
  }

  getUserJobs(user_id){
    const headers = new HttpHeaders({
      Authorization: localStorage.getItem('id_token')
    });
    return this.http.get(`/api/user_jobs/${user_id}`, {headers:headers})
  }

  getUserData(userId){
    const headers = new HttpHeaders({
      Authorization: localStorage.getItem('id_token')
    });
    return this.http.get(`/api/user_data/${userId}`, {headers:headers})
  }

  getJobBids(id){
    const headers = new HttpHeaders({
      Authorization: localStorage.getItem('id_token')
    });
    return this.http.get(`/api/bids/${id}`, {headers:headers})
  }

  sendBid(bidObj){
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('id_token')
    });
    return this.http.post('/api/send_bid', bidObj, {headers:headers})
  }

  deleteBid(bidId){
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('id_token')
    });
    return this.http.delete(`/api/remove_bid/${bidId}/`, {headers:headers})
  }

  updateProfile(updateObj){
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('id_token')
    });
    return this.http.put('/api/update_profile', updateObj, {headers:headers})
  }

}
