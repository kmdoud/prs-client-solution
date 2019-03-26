import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';

@Component
({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit 
{

  request: Request;
  user: User;

  verify: boolean;

  setVerifyT()
  {
    this.verify = true;
  };
  setVerifyF()
  {
    this.verify = false;
  };

  review(): void
  {
    this.requestsrv.review(this.request)
      .subscribe
      (
        resp =>
        {
          console.log(" Request Review Successful", resp);
          this.router.navigateByUrl("/request/list");
        },
        err => 
        {
          console.error(" Review Failed", err);
        }
        
      );
  }

  delete(): void
  {
    this.requestsrv.remove(this.request)
      .subscribe
      (
        resp =>
        {
          console.log("Request Delete Successful", resp);
          this.router.navigateByUrl("/request/list");
        },
        err =>
        {
          console.error("Delete Failed", err);
        }
      );
  }

  constructor
  ( private requestsrv: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private syssrv: SystemService
  ) 
  { }

  ngOnInit() 
  {
    this.syssrv.verifyLogin();
    this.user = this.syssrv.get();
    let id = this.route.snapshot.params.id;


    this.requestsrv.get(id)
      .subscribe(resp => 
        {
          console.log(resp)
          this.request = resp;
        });
           

  }
}
