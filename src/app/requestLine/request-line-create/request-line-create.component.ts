import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '../../requestLine/request-line.service';
import { RequestLine } from '../../requestLine/request-line.class';
import { SystemService } from '../../system/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit 
{

  requestLine: RequestLine = new RequestLine (0,0);
  products: Product[];

  save(): void
  {
    this.requestLinesrv.create(this.requestLine)
      .subscribe
      (
        resp => 
        {
          console.log(resp);
          this.router.navigateByUrl('/requestLine/list/:prid');
        },
        err => 
        {
          console.error(err);
        }
      )
  }
  constructor
  ( private requestLinesrv: RequestLineService,
    private router: Router,
    private syssrv: SystemService,
    private productsrv: ProductService
  ) { }

  ngOnInit() 
  {
    this.productsrv.list()
      .subscribe(resp => 
        {
          this.products = resp;
        })
  }

}
