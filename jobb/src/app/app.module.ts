import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { NgxNotificationComponent } from 'ngx-notification';
import { MzToastModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize'
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobbComponent } from './components/jobb/jobb.component';
import { AddComponent } from './components/add/add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { RouteService } from './services/route.service';

import { JwtModule } from '@auth0/angular-jwt';
import { ProfileComponent } from './components/profile/profile.component';
import { JobbdetailsComponent } from './components/jobbdetails/jobbdetails.component';
import { MessagesComponent } from './components/messages/messages.component';
import { JobbmessagesComponent } from './components/jobbmessages/jobbmessages.component';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';
import { Profile2Component } from './components/profile2/profile2.component';

export function tokenGetter() {
  return localStorage.getItem('id_token');
}


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'logga_in',
    component: LoginComponent,
  },
  {
    path: 'registrera',
    component: RegisterComponent,
  },
  {
    path: 'profil',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profil/updatera',
    component: UpdateprofileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'användare/:jobId/:id',
    component: Profile2Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'mina_jobb',
    component: MessagesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mina_jobb/:id',
    component: JobbmessagesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'jobb',
    component: JobbComponent,
  },
  {
    path: 'details/:id',
    component: JobbdetailsComponent,
  },
  {
    path: 'jobb/:searchTerm',
    component: JobbComponent,
  },
  {
    path: 'skapa',
    component: AddComponent,
    canActivate: [AuthGuard]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    JobbComponent,
    AddComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    JobbdetailsComponent,
    MessagesComponent,
    JobbmessagesComponent,
    NgxNotificationComponent,
    UpdateprofileComponent,
    Profile2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    }),
    NgFlashMessagesModule.forRoot(),
    MzToastModule,
    MzModalModule,
    NgxPaginationModule
  ],
  exports: [
    MzToastModule,
  ],
  providers: [ValidateService, AuthService, RouteService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
