import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';
@Component
({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit 
{

  requests: Request[];
  
  canView: boolean = true;

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
    this.requestsrv.getReview()
      .subscribe( resp => 
        {
          console.log(resp);
          this.requests = resp;
        });

    
  }

}
