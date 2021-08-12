import { RequestService } from './../../../service/request.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../../../model/request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  title: string = 'Request-Create';
  request: Request = new Request();
  submitBtnTitle: string = 'Create';

  constructor(
    private requestSvc: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.requestSvc.create(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        this.router.navigateByUrl("/request-list");
      },
      err => { console.log(err); }
    );

  }
}