import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';

@Component
({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit 
{

  requests: Request[];
  request: Request;
  
  loggedInUser: User;
  user: User;
  admin: boolean;
  canView: boolean;

  rsearchCriteria: string = "";
  sortCriteria: string = "submittedDate";
  sortOrder: string = "asc";


  sortBy(column: string): void
  {
    if(this.sortCriteria === column)
    {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    }
    else
    {
      this.sortCriteria = column;
      this.sortOrder = "asc";
    }
  }




  constructor(private requestsrv: RequestService, private syssrv: SystemService) { }

  ngOnInit() 
  {
    this.syssrv.verifyLogin();
    this.user = this.syssrv.get();
    console.log("Verify logged in user: ", this.user);

    this.admin = this.syssrv.isAdmin();
    this.canView = this.admin;

    this.requestsrv.list()
      .subscribe( resp => 
        {
          console.log(resp);
          this.requests = resp;
        });

    
  }
}
