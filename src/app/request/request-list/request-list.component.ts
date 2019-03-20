import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';

@Component
({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit 
{

  requests: Request[];

  rsearchCriteria: string = "";

  canView: boolean = true;


  constructor(private requestsrv: RequestService, private syssrv: SystemService) { }

  ngOnInit() 
  {
    this.requestsrv.list()
      .subscribe( resp => 
        {
          console.log(resp);
          this.requests = resp;
        });

    
  }
}
