import { Component, OnInit } from '@angular/core'; 
import { UserService } from './User/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  users: User[];

  constructor(private usersvc: UserService) {}

  ngOnInit() {
    this.usersvc.list()
      .subscribe(resp => {
        this.users = resp.Data;
        console.log(resp);
      })
  }
}
