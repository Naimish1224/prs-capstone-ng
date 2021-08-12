
import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[] = [];
  title: string = 'Vendor List';

  constructor(private vendorSvc: VendorService) { }

  ngOnInit(): void {
    this.vendorSvc.get().subscribe(
      resp => { this.vendors = resp as Vendor[];
                console.log("list of vendors: ", this.vendors); },
      err => { console.log(err);}
    );
  }

}