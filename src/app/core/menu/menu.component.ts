import { MenuItem } from './../../model/menu-item.class';
import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(
    private sysSvc: SystemService
  ) { }

  ngOnInit(): void {
    this.menuItems = [
      new MenuItem("User", "/user-list", "User List"),
      new MenuItem("Product", "/product-list", "Product List"),
      new MenuItem("Vendor", "/vendor-list", "Vendor List"),
      new MenuItem("Request", "/request-list", "Request List"),
      new MenuItem("Review", "/request-review", "Review"),
      new MenuItem("Logout", "/user-login", "User Login")
      
    ];

    // let displayStr = (this.sysSvc.loggedInUser.id == 0) ? "Login" : "Logout";
    // this.menuItems.push(new MenuItem(displayStr, "/user-login", "User Login"));


  }

}