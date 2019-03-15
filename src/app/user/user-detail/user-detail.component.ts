import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit 
{
  user: User;

  constructor(private usersrv: UserService, private route: ActivatedRoute) 
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
