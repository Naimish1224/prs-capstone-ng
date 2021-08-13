
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  request: Request = new Request();
  requestId: number = 0;
  title: string = 'Purchase Request Line Items';

  constructor(private requestSvc: RequestService,
    private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      this.route.params.subscribe(parms => this.requestId = parms["id"]);
      this.requestSvc.get(this.requestId).subscribe(
        res => {
          this.request = res as Request;
        },
        err => { console.log(err); }
      );
    }

}