import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'menu';


    menudata = [
    { href: "user", display: "User", img: 'assets/images/user.png' },
    { href: "vendor", display: "Vendor", img: 'assets/images/cart.png' },
    { href: "product", display: "Product", img: 'assets/images/product.png' },
    { href: "purchaserequest", display: "Purchase Request", img: 'assets/images/clipboard.png' }


    ];
    //tableclass: string;

    //change(): void {
        //this.tableclass = "table table sm";
    //}

    constructor() { }

    ngOnInit() {}
}