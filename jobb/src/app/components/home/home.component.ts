import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchTerm: String;

  constructor(private router: Router, private flashMessage: NgFlashMessageService) { }

  ngOnInit() {
  }

  onSearchSubmit(){
    if(this.searchTerm){
      this.router.navigate(['jobb', this.searchTerm]);
    }else{
      return false;
    }
  }

}
