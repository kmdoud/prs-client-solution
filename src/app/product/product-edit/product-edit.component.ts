import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { SystemService } from '../../system/system.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';


@Component
({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit 
{
  product: Product;
  vendors: Vendor[];

  save():void
  {
    this.productsrv.change(this.product)
      .subscribe
      (resp => 
        {
          console.log("Update Succesful: ", resp);
          this.router.navigateByUrl("/product/list");
        },
        err => 
        {
          console.error("Update Failed");
        });
  }

  constructor
  ( private productsrv: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private syssrv: SystemService,
    private vendorsrv: VendorService
  ) { }

  ngOnInit() 
  {
    this.syssrv.verifyLogin();
    let id = this.route.snapshot.params.id;

    this.vendorsrv.list()
    .subscribe(resp => 
      {
        this.vendors = resp;
      })

    this.productsrv.get(id)
      .subscribe(
        resp => 
        {
          console.log(resp)
          this.product = resp;
        },
        err => 
        {
          console.error(err);
        }
        );
  }
}
