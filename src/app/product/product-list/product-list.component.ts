import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';

@Component
({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit 
{
  products: Product[];
  loggedInUser: User;
  isAdmin: boolean;

  psearchCriteria: string = "";
  sortCriteria: string = "name";
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




  constructor(private productsrv: ProductService, private syssrv: SystemService) { }

  ngOnInit() 
  {
    this.syssrv.verifyLogin();
    this.loggedInUser = this.syssrv.get();
    this.isAdmin = this.loggedInUser.isAdmin;
    this.productsrv.list()
      .subscribe( resp => 
        {
          console.log(resp);
          this.products = resp;
        });

    
  }
}
