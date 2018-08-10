import { Component, OnInit } from '@angular/core'; 

import { User } from '../../models/user'
import { UserService } from '../user.service';
import { JSONResponse } from '../../JsonResponse';



@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  headers: string[] = ["Id", "Username", "Password", "Firstname", "Lastname", "Email", "Phone","IsAdmin", "IsReviewer", "Active", "Actions"]
  
  sortProperty: string = "Lastname";
  sortOrder: string = "asc";

  sort(sortBy: string): void {
    if(sortBy === this.sortProperty)
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    else {
      this.sortProperty = sortBy;
      this.sortOrder = 'asc';
    }
  }
  
  constructor(private UserSvc: UserService) { }

  ngOnInit() {
    this.UserSvc.list().subscribe(resp => {
      this.users = resp.Data;
      console.log(resp);
    });
  }

}
