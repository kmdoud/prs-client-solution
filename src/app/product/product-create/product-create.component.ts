import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class'; 
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';

@Component
({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit 
{

  product: Product = new Product(0,0,'','',0,'','');

  save(): void
  {
    this.productsrv.create(this.product)
      .subscribe
      (
        resp => 
        {
          console.log(resp);
          this.router.navigateByUrl('/product/list');
        },
        err => 
        {
          console.error(err);
        }
      )
  }
  constructor
  ( private productsrv: ProductService,
    private router: Router,
    private syssrv: SystemService
  ) { }

  ngOnInit() {
  }

}
