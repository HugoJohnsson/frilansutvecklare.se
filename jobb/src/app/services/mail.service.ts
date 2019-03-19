import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendEmployer(messageObj){
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post('http://localhost:5000/mail/send_employer', messageObj, {headers:headers})
  }
}
