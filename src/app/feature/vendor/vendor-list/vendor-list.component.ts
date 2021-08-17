
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { Vendor } from 'src/app/model/vendor.class';
import { SystemService } from 'src/app/service/system.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[] = [];
  title: string = 'Vendor List';
  loggedInUser: User = new User();

  constructor(private vendorSvc: VendorService, private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.loggedInUser = this.sysSvc.loggedInUser;
    this.sysSvc.checkLogin();
    this.vendorSvc.get().subscribe(
      resp => { this.vendors = resp as Vendor[];
                console.log("list of vendors: ", this.vendors); },
      err => { console.log(err);}
    );
  }

}