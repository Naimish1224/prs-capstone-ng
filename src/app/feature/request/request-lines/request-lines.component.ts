
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { LineItem } from 'src/app/model/lineitem.class';
import { LineItemService } from 'src/app/service/lineitem.service';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  request: Request = new Request();
  vendor: Vendor = new Vendor();
  product: Product = new Product();
  lineitem: LineItem = new LineItem();
  requestId: number = 0;
  lineitemId: number = 0;
  title: string = 'Purchase Request Line Items';
  

  constructor(private requestSvc: RequestService, private lineitemSvc: LineItemService,
    private productSvc: ProductService,  private vendorSvc: VendorService,
    private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      this.route.params.subscribe(parms => this.requestId = parms["id"]);
      this.requestSvc.get(this.requestId).subscribe(
        res => {
          this.request = res as Request;
        },
        err => { console.log(err); }
      );
      this.lineitemSvc.get(this.requestId).subscribe(
        res => {
          this.lineitem = res as LineItem;
        },
        err => { console.log(err); }
      );
      this.route.params.subscribe(parms => this.requestId = parms["id"]);
    console.log('user detail, id=',this.requestId);
    this.requestSvc.get(this.requestId).subscribe(
      resp => {
        this.request = resp as Request;
      },
      err => { console.log(err); }
    );

    }

}