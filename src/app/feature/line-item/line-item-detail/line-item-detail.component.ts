import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItem } from 'src/app/model/lineitem.class';
import { LineItemService } from 'src/app/service/lineitem.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-lineitem-detail',
  templateUrl: './line-item-detail.component.html',
  styleUrls: ['./line-item-detail.component.css']
})
export class LineItemDetailComponent implements OnInit {

  title: string = 'LineItem-Detail';
  lineitem: LineItem = new LineItem();
  lineitemId: number = 0;

  constructor(
    private lineitemSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute,
    private sysSvc: SystemService
  ) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();
    this.route.params.subscribe(parms => this.lineitemId = parms["id"]);
    this.lineitemSvc.get(this.lineitemId).subscribe(
      resp => {
        this.lineitem = resp as LineItem;
      },
      err => { console.log(err); }
    );
  }

  delete() {
    this.lineitemSvc.delete(this.lineitemId).subscribe(
      resp => {
        this.lineitem = resp as LineItem;
        this.router.navigateByUrl('/request-lines/'+this.lineitem.request.id);
      },
      err => {
        console.log(err);
      }
    );
  }
}