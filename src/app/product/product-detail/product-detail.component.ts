import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';

@Component
({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit 
{

  product: Product;
  loggedInUser: User;
  isAdmin: boolean;
  verify: boolean;

  setVerifyT()
  {
    this.verify = true;
  };
  setVerifyF()
  {
    this.verify = false;
  };

  delete(): void
  {
    this.productsrv.remove(this.product)
      .subscribe
      (
        resp =>
        {
          console.log("Product Delete Successful", resp);
          this.router.navigateByUrl("/product/list");
        },
        err =>
        {
          console.error("Delete Failed", err);
        }
      );
  }

  constructor
  ( private productsrv: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private syssrv: SystemService
  ) 
  { }

  ngOnInit() 
  {
    this.syssrv.verifyLogin();
    this.loggedInUser = this.syssrv.get();
    this.isAdmin = this.loggedInUser.isAdmin;
    let id = this.route.snapshot.params.id;


    this.productsrv.get(id)
      .subscribe(resp => 
        {
          console.log(resp)
          this.product = resp;
        });
           

  }
}
