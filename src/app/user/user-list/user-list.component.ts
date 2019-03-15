import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class'; 

@Component
({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit 
{
  users: User[];

  canView: boolean = false;


  constructor(private usersrv: UserService) { }

  ngOnInit() 
  {
    this.usersrv.list()
      .subscribe( resp => 
        {
          console.log(resp);
          this.users = resp;
        });

    
  }

}