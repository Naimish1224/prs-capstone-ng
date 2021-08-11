import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../model/user.class';

@Component({
  selector: 'app-user-create',
  templateUrl: '../user-maint/user-maint.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  title: string = 'User-Create';
  user: User = new User();
  submitBtnTitle: string = 'Create';

  constructor(
    private userSvc: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.userSvc.create(this.user).subscribe(
      resp => {
        this.user = resp as User;
        this.router.navigateByUrl("/user-list");
      },
      err => { console.log(err); }
    );

  }
}