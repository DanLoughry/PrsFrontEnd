import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { JSONResponse } from '../../JSONResponse';


@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();

  change(): void{
    console.log(this.user);
    this.UserSvc.change(this.user)
      .subscribe(resp => {
        console.log(resp);
        // navigate back to user list if-success
      });
  }

  constructor(private UserSvc: UserService,
              private Router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

let id = this.route.snapshot.params.id;

    this.UserSvc.get(id)
      .subscribe(resp => {
      this.user = resp.Data;
      console.log(resp);
    })
  }

}
