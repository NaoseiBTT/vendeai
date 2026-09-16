import { Repository } from "typeorm";
import { ProductListingRepository } from "../../../../application/repositories/product-listing.repository.js";
import { ProductListing } from "../../../../domain/entities/product-listing.entity.js";
import { ProductListingSchema } from "../entities/product-listing-schema.js";
import { InjectRepository } from "@nestjs/typeorm";


export class ProductListingTypeOrmRepository implements ProductListingRepository{

    constructor(
        @InjectRepository(ProductListingSchema)
        private readonly repository: Repository<ProductListingSchema>
    ){}
    
    async create(productListing: ProductListing): Promise<void> {
        
        const listing = this.repository.create({
            title: productListing.title,
            description: productListing.description,
            priceInCents: productListing.priceInCents,
            sellerId: productListing.sellerId,
            categoryId: productListing.categoryId,
            status: productListing.status
        })

        await this.repository.save(listing)
    }

    async findAll(): Promise<ProductListing[]> {
        const listings = await this.repository.find()

        return listings.map((listing)=>
            ProductListing.restore({
                title: listing.title,
                description: listing.description,
                priceInCents: listing.priceInCents,
                sellerId: listing.sellerId,
                categoryId: listing.categoryId,
                status: listing.status,
            })
        
        )
    }
}