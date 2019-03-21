import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '../../requestLine/request-line.service';
import { RequestLine } from '../../requestLine/request-line.class';
import { SystemService } from '../../system/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class'; 



@Component
({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit 
{

  requestLine: RequestLine;
  products: Product[];

  save():void
  {
    this.requestLinesrv.change(this.requestLine)
      .subscribe
      (resp => 
        {
          console.log("Update Succesful: ", resp);
          this.router.navigateByUrl("/requestLine/list/:prid");
        },
        err => 
        {
          console.error("Update Failed");
        });
  }
  delete(): void
  {
    this.requestLinesrv.remove(this.requestLine)
      .subscribe
      (
        resp =>
        {
          console.log("Request Line Delete Successful", resp);
          this.router.navigateByUrl("/requestLine/list/{{request.id}}");
        },
        err =>
        {
          console.error("Delete Failed", err);
        }
      );
  }

  constructor
  ( private requestLinesrv: RequestLineService ,
    private route: ActivatedRoute,
    private router: Router,
    private syssrv: SystemService,
    private productsrv: ProductService
    
  ) { }

  ngOnInit() 
  {
    let id = this.route.snapshot.params.id;

    this.productsrv.list()
    .subscribe(resp => 
      {
        this.products = resp;
      })

    this.requestLinesrv.get(id)
      .subscribe(
        resp => 
        {
          console.log(resp)
          this.requestLine = resp;
        },
        err => 
        {
          console.error(err);
        }
        );
  }
}
