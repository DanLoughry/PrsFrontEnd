import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../models/user';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  create(): void{
    console.log(this.user);
    this.UserSvc.create(this.user)
      .subscribe(resp => {
        console.log(resp);
        // navigate back to user list if-success
      });
  }

  constructor(private UserSvc: UserService) { }

  ngOnInit() {
  }

}
