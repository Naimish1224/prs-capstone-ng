import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  title: string = 'Request-Review';
  request: Request = new Request();
  requestId: number = 0;
  requests: Request[] = [];
  users: User[] = [];

  constructor(
    private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    this.requestSvc.get(this.requestId).subscribe(
      resp => { this.request = resp as Request;},
            err=> {console.log(err);}
    );
  }
  
  listReview() {
    this.requestSvc.list().subscribe(
      resp => {
        this.requests = resp as Request[];
        console.log("list of requests:", this.requests);
      },
      err => {
        console.log(err);
      }
    );
  }

}