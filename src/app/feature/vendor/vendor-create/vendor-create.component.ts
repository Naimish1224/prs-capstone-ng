import { VendorService } from './../../../service/vendor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../../../model/vendor.class';

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
    private vendorSvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
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