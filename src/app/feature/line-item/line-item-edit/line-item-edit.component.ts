
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { LineItem } from 'src/app/model/lineitem.class';
import { Request } from 'src/app/model/request.class';
import { ProductService } from 'src/app/service/product.service';
import { LineItemService } from 'src/app/service/lineitem.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-lineitem-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit {
  title: string = 'LineItem-Edit';
  lineitem: any = null;
  products: Product[] = [];
  requests: Request[] = [];
  lineitemId: number = 0;

  constructor(
    private lineitemSvc: LineItemService,
    private productSvc: ProductService,
    private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.lineitemId = parms["id"]);
    this.lineitemSvc.get(this.lineitemId).subscribe(
      resp => {
        this.lineitem = resp as LineItem;
      },
      err => { console.log(err); }
    );

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
    this.lineitemSvc.edit(this.lineitem).subscribe(
      resp => {
        this.lineitem = resp as LineItem;
        this.router.navigateByUrl("/line-item-list");
      },
      err => { console.log(err); }
    );

  }

  compProduct(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }

  compRequest(a: Request, b: Request): boolean {
    return a && b && a.id === b.id;
  }
}