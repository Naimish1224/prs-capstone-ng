import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { LineItem } from 'src/app/model/lineitem.class';
import { Request } from 'src/app/model/request.class';
import { ProductService } from 'src/app/service/product.service';
import { LineItemService } from 'src/app/service/lineitem.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {
  title: string = 'LineItem-Create';
  lineitem: LineItem = new LineItem();
  products: Product[] = [];
  requests: Request[] = [];

  constructor(
    private lineitemSvc: LineItemService,
    private productSvc: ProductService,
    private requestSvc: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productSvc.list().subscribe(
      resp => {
        this.products = resp as Product[];
      },
      err => { console.log(err); }
    );

    this.requestSvc.list().subscribe(
      resp => {
        this.requests = resp as Request[];
      },
      err => { console.log(err); }
    );
  }

  save() {
    this.lineitemSvc.create(this.lineitem).subscribe(
      resp => {
        this.lineitem = resp as LineItem;
        this.router.navigateByUrl("/line-item-list");
      },
      err => { console.log(err); }
    );

  }
}