import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { RequestLineService } from '../../requestLine/request-line.service'; 
import { RequestLine } from '../request-line.class';

@Component
({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent implements OnInit 
{

  request: Request;
  requestLine: RequestLine;
  
  canView: boolean = true;

  // rsearchCriteria: string = "";
  // sortCriteria: string = "submittedDate";
  // sortOrder: string = "asc";

  // sortBy(column: string): void
  // {
  //   if(this.sortCriteria === column)
  //   {
  //     this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
  //   }
  //   else
  //   {
  //     this.sortCriteria = column;
  //     this.sortOrder = "asc";
  //   }
  // }

  delete(requestLine: RequestLine): void
  {
    this.requestLinesrv.remove(requestLine)
      .subscribe
      (
        resp =>
        {
          console.log("Request Line Delete Successful", resp);
          this.router.navigateByUrl(`/requestLine/list/${this.request.id}`);
        },
        err =>
        {
          console.error("Delete Failed", err);
        }
      );
  }




  constructor
  ( private requestsrv: RequestService,
    private syssrv: SystemService,
    private route: ActivatedRoute,
    private router: Router,
    private requestLinesrv: RequestLineService
  ) { }

  ngOnInit() 
  {
    let id = this.route.snapshot.params.prid;

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
