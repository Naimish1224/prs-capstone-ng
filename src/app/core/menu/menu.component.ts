import { MenuItem } from './../../model/menu-item.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      new MenuItem("User", "/user-list", "User List"),
      new MenuItem("Product", "/product-list", "Product List"),
      new MenuItem("Vendor", "/vendor-list", "Vendor List"),
      new MenuItem("Request", "/request-list", "Request List"),
      new MenuItem("Login", "/user-login", "User Login")
    ];
  }

}