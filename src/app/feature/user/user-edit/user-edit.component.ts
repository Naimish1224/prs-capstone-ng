import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: '../user-maint/user-maint.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  title: string = 'User-Edit';
  user: User = new User();
  submitBtnTitle: string = 'Edit';
  userId: number = 0;

  constructor(
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.userId = parms["id"]);
    this.userSvc.getById(this.userId).subscribe(
      resp => {
        this.user = resp as User;
      },
      err => { console.log(err); }
    );
  }

  save() {
    this.userSvc.edit(this.user).subscribe(
      resp => {
        this.user = resp as User;
        this.router.navigateByUrl("/user-list");
      },
      err => { console.log(err); }
    );

  }


}