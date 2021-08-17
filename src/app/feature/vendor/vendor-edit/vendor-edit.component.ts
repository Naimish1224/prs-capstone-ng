import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from './../../../service/vendor.service';
import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../../model/vendor.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  title: string = 'Vendor-Edit';
  vendor: Vendor = new Vendor();
  submitBtnTitle: string = 'Edit';
  vendorId: number = 0;

  constructor(
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    private sysSvc: SystemService
  ) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();
    this.route.params.subscribe(parms => this.vendorId = parms["id"]);
    this.vendorSvc.getById(this.vendorId).subscribe(
      resp => {
        this.vendor = resp as Vendor;
      },
      err => { console.log(err); }
    );
  }

  save() {
    this.vendorSvc.edit(this.vendor).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        this.router.navigateByUrl("/vendor-list");
      },
      err => { console.log(err); }
    );

  }


}