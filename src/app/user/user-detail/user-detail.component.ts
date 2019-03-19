import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit 
{
  user: User;

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
    this.usersrv.remove(this.user)
      .subscribe
      (
        resp =>
        {
          console.log("User Delete Successful", resp);
          this.router.navigateByUrl("/user/list");
        },
        err =>
        {
          console.error("Delete Failed", err);
        }
      );
  }

  constructor
  ( private usersrv: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private syssrv: SystemService
  ) 
  { }

  ngOnInit() 
  {
    let id = this.route.snapshot.params.id;


    this.usersrv.get(id)
      .subscribe(resp => 
        {
          console.log(resp)
          this.user = resp;
        });
           

  }

}
