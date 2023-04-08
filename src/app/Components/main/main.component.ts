import { Component, OnInit } from '@angular/core';
import { Customer, Product, Purchase } from './main.models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  t = 'Product Purchases';
  cust?: Customer[];
  prod?: Product[];
  purchase?: Purchase[];
  selected_c: number = 0;
  purchased_p?: Product[];
  isLoaded:boolean = false;

  async ngOnInit() {
    // Load customer and product data up front
    var c = new Customer();
    this.cust = await c.load();
    var p = new Product();
    this.prod = await p.load();
  }

  // When the user selects a new customer
  select(event:any) {
    this.isLoaded = false;
    var pu = new Purchase();
    // Load product purchase information
    pu.load().then(s => this.purchase = s).then(_ => {
      this.selected_c = event.target.value as number;
      let purchase = this.purchase!.filter(p => p.customerid == event.target.value);
      this.purchased_p = purchase.map(p => this.prod!.find(pr => pr.id == p.productid)!);
  
      this.isLoaded = true;
    });
  }

  // Gets customer info for purchase details
  customer(id:number) {
    var c = this.cust?.find(s => s.id == id);
    return c?.firstname + " " + c?.lastname + " (" + c?.yearofbirth + ")";
  }
}