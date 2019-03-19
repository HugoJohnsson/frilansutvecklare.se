import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.logout();
    this.toastService.show('Du är nu utloggad!', 3000, 'dark', () => {});
    this.router.navigate(['']);
  }

}
