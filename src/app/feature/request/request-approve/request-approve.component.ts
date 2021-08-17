import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/lineitem.class';
import { Request } from 'src/app/model/request.class';
import { LineItemService } from 'src/app/service/lineitem.service';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {

  title: string = "Purchase Request Approve/Reject";
  requestId: number = 0;
  request: Request = new Request();
  lineItems: LineItem[] = [];
  title2: string = "Line Items";
  

  constructor(
    private requestSvc: RequestService,
    private lineItemSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute,
    private sysSvc: SystemService
       ) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();
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
    console.log("Approve request:", this.request);
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
    console.log("Save request approve:",this.request);
    this.requestSvc.create(this.request).subscribe(
      
      resp => {
        this.request = resp as Request;
        this.router.navigateByUrl('/request-list');
      },
      err => { console.log(err) }
    );
  }

  approve() {
    this.requestSvc.approve(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        this.router.navigateByUrl('/request-list');
      },
      err => {
        console.log(err);
      }
    );
  } 

  reject() {
    this.requestSvc.reject(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        this.router.navigateByUrl('/request-list');
      },
      err => {
        console.log(err);
      }
    );
  } 
  
}