import { ProductListingRepository } from "../../application/repositories/product-listing.repository.js";
import { ProductListing } from "../../domain/entities/product-listing.entity.js";

export class InMemoryProductListingRepository implements ProductListingRepository{

    public items: ProductListing[] = []

    async create(productListing: ProductListing): Promise<void> {
        this.items.push(productListing)
    }

    findAll(): Promise<ProductListing[]> {
       return this.findAll()
    }
}