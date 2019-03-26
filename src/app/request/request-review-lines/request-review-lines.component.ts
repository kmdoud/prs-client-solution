import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { RequestLineService } from '../../requestLine/request-line.service'; 
import { RequestLine } from '../../requestLine/request-line.class';

@Component({
  selector: 'app-request-review-lines',
  templateUrl: './request-review-lines.component.html',
  styleUrls: ['./request-review-lines.component.css']
})
export class RequestReviewLinesComponent implements OnInit {

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

  // delete(requestLine: RequestLine): void
  // {
  //   this.requestLinesrv.remove(requestLine)
  //     .subscribe
  //     (
  //       resp =>
  //       {
  //         console.log("Request Line Delete Successful", resp);
  //         this.refresh();
  //       },
  //       err =>
  //       {
  //         console.error("Delete Failed", err);
  //       }
  //     );
  // }

  approve(request: Request): void
  {
    this.requestsrv.approve(request)
      .subscribe
      (
        resp => 
        {
          console.log("Request Approval Successful" , resp);
          this.router.navigateByUrl("/request/list");
        },
        err => 
        {
          console.error("Request Approval Failed", err);
        }
      );
  }
  reject(request: Request): void
  {
    this.requestsrv.reject(request)
      .subscribe
      (
        resp => 
        {
          console.log("Request Rejection Successful" , resp);
          this.router.navigateByUrl("/request/list");
        },
        err => 
        {
          console.error("Request Rejection Failed", err);
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
    this.syssrv.verifyLogin();
    let id = this.route.snapshot.params.id;

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
