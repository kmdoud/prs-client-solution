import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { SystemService } from '../../system/system.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit 
{
  user: User;

  save():void
  {
    this.usersrv.change(this.user)
      .subscribe
      (resp => 
        {
          console.log("Update Succesful: ", resp);
          this.router.navigateByUrl("/user/list");
        },
        err => 
        {
          console.error("Update Failed");
        });
  }

  constructor
  ( private usersrv: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private syssrv: SystemService
  ) { }

  ngOnInit() 
  {
    let id = this.route.snapshot.params.id;

    this.usersrv.get(id)
      .subscribe(
        resp => 
        {
          console.log(resp)
          this.user = resp;
        },
        err => 
        {
          console.error(err);
        }
        );
  }

}
