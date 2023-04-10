import { Purchase } from '../Components/main/main.models';
import { LoadService } from './load.service';

export class PurchaseService extends LoadService<Purchase> {
    async load(): Promise<Purchase[]> {
        await wait(1000);

        var data = await this.loadData('assets/Data/customer-purchases.json');
        return data.map(
            (p: Purchase) => new Purchase(p.id, p.customerid, p.productid)
        );
    }
}

// --- This function simulates waiting time as data is loaded. Not part of test --- //
function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
