import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';

@Component
({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit 
{
  vendor: Vendor;
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
    this.vendorsrv.remove(this.vendor)
      .subscribe
      (
        resp =>
        {
          console.log("Vendor Delete Successful", resp);
          this.router.navigateByUrl("/vendor/list");
        },
        err =>
        {
          console.error("Delete Failed", err);
        }
      );
  }

  constructor
  ( private vendorsrv: VendorService,
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


    this.vendorsrv.get(id)
      .subscribe(resp => 
        {
          console.log(resp)
          this.vendor = resp;
        });
           

  }

}
