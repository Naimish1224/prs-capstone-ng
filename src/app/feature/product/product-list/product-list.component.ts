
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { Product } from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  title: string = 'Product List';
  loggedInUser: User = new User();

  constructor(private productSvc: ProductService, private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.loggedInUser = this.sysSvc.loggedInUser;
    this.sysSvc.checkLogin();
    this.productSvc.list().subscribe(
      resp => { this.products = resp as Product[];
                console.log("list of products: ", this.products); },
      err => { console.log(err);}
    );
  }

}