export class Customer {
    public constructor(public id?: number, public firstname?: string, public lastname?: string, public yearofbirth?: number) {}
    // Get customer data source
    async load() {
      var data = await (await fetch('assets/Data/customers.json')).json();
      return data.map((c: any) => new Customer(c.id, c.firstname, c.lastname, c.yearofbirth));
    }
  }
  
  export class Product {
    constructor(public id?: number, public name?: string, public type?: string) {}
    async load() {
      var data = await (await fetch('assets/Data/products.json')).json();
      return data.map((p: any) => new Product(p.id, p.name, p.type));
    }
  }
  
  export class Purchase {
    constructor(public id?: number, public customerid?: number, public productid?: number) {}
    async load() {
      await wait(1000);

      var data = await (await fetch('assets/Data/customer-purchases.json')).json();
      return data.map((p: any) => new Purchase(p.id, p.customerid, p.productid));
    }
  }

  // --- This function simulates waiting time as data is loaded. Not part of test --- //
  function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }