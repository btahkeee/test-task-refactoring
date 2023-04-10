import { CustomerService } from './../../Services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer, Product, Purchase } from './main.models';
import { PurchaseService } from 'src/app/Services/purchase.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    providers: [CustomerService]
})
export class MainComponent implements OnInit {
    title = 'Product Purchases';
    customerList: Customer[] = new Array<Customer>();
    productList?: Product[];
    purchase?: Purchase[];
    selectedCustomer: number = 0;
    purchasedProducts?: Product[];
    isLoaded: boolean = false;

    constructor(
        private purchaseService: PurchaseService,
        private customerService: CustomerService,
        private productService: ProductService
    ) {}

    async ngOnInit(): Promise<void> {
        // Load customer and product data up front
        Promise.allSettled([
            (this.customerList = await this.customerService.load()),
            (this.productList = await this.productService.load()),
        ]).then((_) => this.loadPurchases(this.customerList[0].id));
    }

    // When the user selects a new customer
    onCustomerSelect(event: any): void {
        this.isLoaded = false;
        this.loadPurchases(event.target.value);
    }

    loadPurchases(customerId?: number): void {
        if (customerId) {
            //TODO create services for different
            this.purchaseService.load().then((purchases) => {
                this.selectedCustomer = customerId;
                let purchase = purchases!.filter(
                    (p) => p.customerid == customerId
                );
                this.purchasedProducts = purchase.map(
                    (p) => this.productList!.find((pr) => pr.id == p.productid)!
                );

                this.isLoaded = true;
            });
        } else {
            console.log('CustomerId is not defined');
        }
    }

    // Gets customer info for purchase details
    getCustomer(id: number): string {
        var c = this.customerList?.find((s) => s.id == id);
        return c?.firstname + ' ' + c?.lastname + ' (' + c?.yearofbirth + ')';
    }
}