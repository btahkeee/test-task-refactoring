export class Customer {
    public constructor(
        public id?: number,
        public firstname?: string,
        public lastname?: string,
        public yearofbirth?: number
    ) {}
}

export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public type?: string
    ) {}
}

export class Purchase {
    constructor(
        public id?: number,
        public customerid?: number,
        public productid?: number
    ) {}
}
