import { Customer } from '../Components/main/main.models';
import { LoadService } from './load.service';

export class CustomerService extends LoadService<Customer> {
    async load(): Promise<Customer[]> {
        var data = await this.loadData('assets/Data/customers.json');
        return data.map(
            (c: Customer) =>
                new Customer(c.id, c.firstname, c.lastname, c.yearofbirth)
        );
    }
}