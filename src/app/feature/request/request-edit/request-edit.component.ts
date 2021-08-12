import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from './../../../service/request.service';
import { Component, OnInit } from '@angular/core';
import { Request } from '../../../model/request.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  title: string = 'Request-Edit';
  request: Request = new Request();
  submitBtnTitle: string = 'Edit';
  requestId: number = 0;

  constructor(
    private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    this.requestSvc.get(this.requestId).subscribe(
      resp => {
        this.request = resp as Request;
      },
      err => { console.log(err); }
    );
  }

  save() {
    this.requestSvc.edit(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        this.router.navigateByUrl("/request-list");
      },
      err => { console.log(err); }
    );

  }


}