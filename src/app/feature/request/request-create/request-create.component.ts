import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  title: string = "Request-Create";
  request: Request = new Request();
  
  constructor(
    private requestSvc:RequestService,
    private systemSvc:SystemService,
    private router:Router,
    private sysSvc: SystemService
  ) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();
    this.request.user = this.systemSvc.loggedInUser;    
    console.log(this.request.user)
  }

  save() {
       
    this.requestSvc.create(this.request).subscribe(
      resp => {
     
        this.request = resp as Request;
        this.router.navigateByUrl("/request-list");
      },
      err => {console.log(err)}
    );
      }
}

