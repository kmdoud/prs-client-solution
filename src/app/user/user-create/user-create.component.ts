import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class'; 
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit 
{
  user: User = new User('','','','','','');

  save(): void
  {
    this.usersrv.create(this.user)
      .subscribe
      (
        resp => 
        {
          console.log(resp);
          this.router.navigateByUrl('/user/list');
        },
        err => 
        {
          console.error(err);
        }
      )
  }
  constructor
  ( private usersrv: UserService,
    private router: Router,
    private syssrv: SystemService
  ) { }

  ngOnInit() 
  {
    this.syssrv.verifyLogin()
  }

}
