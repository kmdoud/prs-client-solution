import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';

@Component
({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit 
{

  request: Request;
  users: User[];

  save():void
  {
    this.requestsrv.change(this.request)
      .subscribe
      (resp => 
        {
          console.log("Update Succesful: ", resp);
          this.router.navigateByUrl("/request/list");
        },
        err => 
        {
          console.error("Update Failed");
        });
  }

  constructor
  ( private requestsrv: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private syssrv: SystemService,
    private usersrv: UserService
  ) { }

  ngOnInit() 
  {
    this.syssrv.verifyLogin();
    let id = this.route.snapshot.params.id;

    this.usersrv.list()
    .subscribe(resp => 
      {
        this.users = resp;
      })

    this.requestsrv.get(id)
      .subscribe(
        resp => 
        {
          console.log(resp)
          this.request = resp;
        },
        err => 
        {
          console.error(err);
        }
        );
  }
}
