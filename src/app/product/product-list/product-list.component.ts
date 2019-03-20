import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { SystemService } from '../../system/system.service';

@Component
({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit 
{
  products: Product[];

  psearchCriteria: string = "";

  canView: boolean = true;


  constructor(private productsrv: ProductService, private syssrv: SystemService) { }

  ngOnInit() 
  {
    this.productsrv.list()
      .subscribe( resp => 
        {
          console.log(resp);
          this.products = resp;
        });

    
  }
}
