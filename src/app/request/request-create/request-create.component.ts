import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';

@Component
({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit 
{

  request: Request = new Request(0,0,'','','','','','',0);
  users: User[];

  save(): void
  {
    this.requestsrv.create(this.request)
      .subscribe
      (
        resp => 
        {
          console.log(resp);
          this.router.navigateByUrl('/request/list');
        },
        err => 
        {
          console.error(err);
        }
      )
  }
  constructor
  ( private requestsrv: RequestService,
    private router: Router,
    private syssrv: SystemService,
    private usersrv: UserService
  ) { }

  ngOnInit() 
  {
    this.usersrv.list()
      .subscribe(resp => 
        {
          this.users = resp;
        })
  }

}
