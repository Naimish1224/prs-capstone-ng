import { VendorService } from './../../../service/vendor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../../../model/vendor.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  title: string = 'Vendor-Create';
  vendor: Vendor = new Vendor();
  submitBtnTitle: string = 'Create';

  constructor(
    private vendorSvc: VendorService, private router: Router, private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();
  }

  save() {
    this.vendorSvc.create(this.vendor).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        this.router.navigateByUrl("/vendor-list");
      },
      err => { console.log(err); }
    );

  }
}