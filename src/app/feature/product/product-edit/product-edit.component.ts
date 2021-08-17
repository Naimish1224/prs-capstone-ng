import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { SystemService } from 'src/app/service/system.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  title: string = "Product-Edit";
  product: Product = new Product();
  vendors: Vendor[] = [];
  submitBtnTitle: string = 'Save';
  productId: number = 0;

  constructor(
    private productSvc: ProductService,
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    private sysSvc: SystemService

  ) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();
    this.route.params.subscribe(parms => this.productId = parms["id"]);
    this.productSvc.get(this.productId).subscribe(
      resp => {
        this.product = resp as Product;
      },
      err => { console.log(err); }
    );

    this.vendorSvc.get().subscribe(
      res => {
        this.vendors = res as Vendor[];
        console.log("List of Vendors: ", this.vendors);
      },
      err => {
        console.log(err);
      }
    );
  }

  save() {
    this.productSvc.edit(this.product).subscribe(
      res => {
        this.product = res as Product;
        this.router.navigateByUrl("/product-list");
      },
      err => { console.log(err); }
    );
  }

  compVendor(a: Vendor, b: Vendor): boolean {
    return a && b && a.id === b.id;
  }
}