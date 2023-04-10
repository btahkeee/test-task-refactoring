import { Injectable } from '@angular/core';
import { Product } from '../Components/main/main.models';
import { LoadService } from './load.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends LoadService<Product> {
    async load(): Promise<Product[]> {
        var data = await this.loadData('assets/Data/products.json');
        return data.map((p: Product) => new Product(p.id, p.name, p.type));
    }
}
