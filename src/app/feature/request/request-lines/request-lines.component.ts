import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/lineitem.class';
import { Request } from 'src/app/model/request.class';
import { LineItemService } from 'src/app/service/lineitem.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  title: string = "Purchase Request Line Items";
  requestId: number = 0;
  request: Request = new Request();
  lineItems: LineItem[] = [];
  title2: string = "Line Items";
  

  constructor(
    private requestSvc: RequestService,
    private lineItemSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute
       ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    this.requestSvc.get(this.requestId).subscribe(
      resp => { this.request = resp as Request;},
            err=> {console.log(err);}
    );

    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    this.lineItemSvc.getLines(this.requestId).subscribe(
      resp => { this.lineItems = resp as LineItem[];},
            err=> {console.log(err);}
    );

  }
  status() {
    console.log("Review request lines:", this.request);
    this.requestSvc.status(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        this.router.navigateByUrl('/request-list');
      },
      err => {console.log(err)}
    );
  }
  listReview() {
    console.log("List of requests:", this.request);
    this.requestSvc.status(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        this.router.navigateByUrl('/request-list');
      },
      err => {console.log(err)}
    );
  }
  
  save() {
    console.log("Save request lines:",this.request);
    this.requestSvc.create(this.request).subscribe(
      
      resp => {
        this.request = resp as Request;
        this.router.navigateByUrl('/request-list');
      },
      err => { console.log(err) }
    );
  }
  
}