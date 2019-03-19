import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import {  Router } from '@angular/router';
import { SystemService} from '../../system/system.service';


@Component
({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  user: User;
  username: string = '';
  password: string = '';
  message: string = 'Ready to login..';

  login(): void 
  {
    this.usersrv.login(this.username, this.password)
      .subscribe
      (
        resp =>
        {
          console.log("Login Successful", resp);
          let user = resp;
          this.syssrv.loggedInUser = user;
          this.router.navigateByUrl("/home");
        },  
        err =>
        {
          console.error("Login Failed - Invalid Username/Password", err);
          this.message = "Login Failed - Please try again";
        }
      )
  }

  constructor
  (
    private usersrv: UserService,
    private router: Router,
    private syssrv: SystemService
  ) { }

  ngOnInit() 
  {
    this.syssrv.loggedInUser = null; //clears out any logged in user
  }

}
