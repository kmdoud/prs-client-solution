import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class'; 
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit 
{
  vendor: Vendor = new Vendor('','','','','','','','');

  save(): void
  {
    this.vendorsrv.create(this.vendor)
      .subscribe
      (
        resp => 
        {
          console.log(resp);
          this.router.navigateByUrl('/vendor/list');
        },
        err => 
        {
          console.error(err);
        }
      )
  }
  constructor
  ( private vendorsrv: VendorService,
    private router: Router,
    private syssrv: SystemService
  ) { }

  ngOnInit() 
  {
    this.syssrv.verifyLogin()
  }

}
