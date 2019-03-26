import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit 
{
  vendor: Vendor;

  save():void
  {
    this.usersrv.change(this.vendor)
      .subscribe
      (resp => 
        {
          console.log("Update Succesful: ", resp);
          this.router.navigateByUrl("/vendor/list");
        },
        err => 
        {
          console.error("Update Failed");
        });
  }

  constructor
  ( private usersrv: VendorService,
    private route: ActivatedRoute,
    private router: Router,
    private syssrv: SystemService
  ) { }

  ngOnInit() 
  {

    this.syssrv.verifyLogin()
    let id = this.route.snapshot.params.id;

    this.usersrv.get(id)
      .subscribe(
        resp => 
        {
          console.log(resp)
          this.vendor = resp;
        },
        err => 
        {
          console.error(err);
        }
        );
  }

}
