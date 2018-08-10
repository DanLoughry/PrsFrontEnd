import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { User } from '../../models/user';;
import { ActivatedRoute } from '@angular/router';
import { JSONResponse } from '../../JsonResponse';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  remove(): void {
    this.UserSvc.remove(this.user)
      .subscribe(resp => {
        console.log("Remove:", resp)
      })
  }

  constructor(private UserSvc: UserService, private route: ActivatedRoute) { }

  ngOnInit() { 
    let id = this.route.snapshot.params.id;
    this.UserSvc.get(id)
    .subscribe(resp => {
      this.user = resp.Data;
      console.log(resp);

    })
  }

}
